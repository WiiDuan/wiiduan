class CoffeeQuiz {
    constructor() {
        this.currentQuestionId = null;  // 添加currentQuestionId的初始化
        this.answers = {};
        this.initializeElements();
        this.bindEvents();
        this.showCoverPage();
    }

    initializeElements() {
        this.coverPage = document.querySelector('.cover-page');
        this.questionContainer = document.querySelector('.question-container');
        this.resultContainer = document.querySelector('.result-container');
        this.buttonContainer = document.querySelector('.button-container');
        this.startButton = document.querySelector('.btn-start');
        this.backButton = document.querySelector('.btn-back');
        this.nextButton = document.querySelector('.btn-next');
        this.retryButton = document.querySelector('.btn-retry');
        this.orderButton = document.querySelector('.btn-order');
        this.resultButtons = document.querySelector('.result-buttons');
        this.loadingContainer = document.querySelector('.loading-container');
        this.overlay = document.querySelector('.overlay');
        this.titleBar = document.querySelector('.title-bar');
    }

    bindEvents() {
        this.startButton.addEventListener('click', () => this.start());
        this.backButton.addEventListener('click', () => this.goBack());
        this.nextButton.addEventListener('click', () => this.goNext());
        this.retryButton.addEventListener('click', () => this.resetQuiz());
        this.orderButton.addEventListener('click', () => this.goToOrder());
        
        this.questionContainer.addEventListener('click', (e) => {
            const option = e.target.closest('.option');
            if (option) {
                this.selectOption(option);
            }
        });
    }

    showCoverPage() {
        this.coverPage.style.display = 'block';
        this.coverPage.classList.add('active');
        this.questionContainer.style.display = 'none';
        this.resultContainer.style.display = 'none';
        this.buttonContainer.style.display = 'none';
        this.resultButtons.style.display = 'none';
        this.titleBar.style.display = 'none';
    }

    start() {
        this.coverPage.classList.remove('active');
        this.titleBar.style.display = 'block';
        this.currentQuestionId = 'q1';  // 设置初始问题ID
        setTimeout(() => {
            this.coverPage.style.display = 'none';
            this.questionContainer.style.display = 'block';
            this.buttonContainer.style.display = 'flex';
            this.showQuestion('q1');
        }, 300);
    }

    showQuestion(questionId) {
        const question = questions.find(q => q.id === questionId);
        if (!question) return;

        this.currentQuestionId = questionId;
        const currentContainer = this.questionContainer;
        currentContainer.classList.add('exit');

        // 控制返回按钮的显示
        const backButton = document.querySelector('.btn-back');
        backButton.style.display = questionId === 'q1' ? 'none' : 'block';

        setTimeout(() => {
            currentContainer.innerHTML = `
                <div class="question">
                    <h2 class="question-title">${question.title}</h2>
                    <div class="options">
                        ${question.options.map(option => `
                            <div class="option ${this.answers[questionId] === option.id ? 'selected' : ''}" 
                                 data-id="${option.id}">
                                ${option.text}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            currentContainer.classList.remove('exit');
            void currentContainer.offsetWidth; // 触发重绘
            currentContainer.classList.add('active');
        }, 300);
    }

    selectOption(option) {
        const currentQuestion = questions.find(q => q.id === this.currentQuestionId);
        const selectedOption = currentQuestion.options.find(opt => opt.id === option.dataset.id);
        
        // 移除其他选项的选中状态
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        // 添加选中状态
        option.classList.add('selected');
        
        // 保存答案
        this.answers[this.currentQuestionId] = selectedOption.id;
        
        // 如果有下一题，自动跳转
        if (selectedOption.next) {
            this.currentQuestionId = selectedOption.next;
            this.showQuestion(this.currentQuestionId);
        } else {
            // 如果是最后一题，显示结果
            this.showResult();
        }
    }

    goBack() {
        const currentIndex = questions.findIndex(q => q.id === this.currentQuestionId);
        if (currentIndex > 0) {
            const prevQuestion = questions[currentIndex - 1];
            this.questionContainer.classList.add('exit');
            
            setTimeout(() => {
                this.currentQuestionId = prevQuestion.id;
                this.showQuestion(prevQuestion.id);
            }, 300);
        }
    }

    async goNext() {
        const currentQuestion = questions.find(q => q.id === this.currentQuestionId);
        const selectedOption = currentQuestion.options.find(opt => opt.id === this.answers[this.currentQuestionId]);
        
        if (selectedOption.next) {
            this.showQuestion(selectedOption.next);
        } else {
            await this.showResult();
        }
    }

    async showResult() {
        try {
            this.showLoading(true);
            
            const recommendation = await getCoffeeRecommendation(
                this.answers.q1,
                this.answers.q2,
                this.answers[this.answers.q2 === 'q2_3' ? 'q4' : 'q3']
            );
            
            this.questionContainer.style.display = 'none';
            this.buttonContainer.style.display = 'none';
            this.resultContainer.style.display = 'block';
            
            if (recommendation) {
                const resultHtml = `
                    <div class="result-card">
                        <div class="result-content">
                            <div class="result-image">
                                <img src="images/coffee-sample.jpg" alt="${recommendation.name}">
                            </div>
                            <div class="result-details">
                                <h2 class="result-title">为您推荐</h2>
                                <h3 class="coffee-name">${recommendation.name}</h3>
                                <div class="coffee-details">
                                    <div class="detail-item">
                                        <span class="detail-label">温度</span>
                                        <span class="detail-value">${recommendation.temperature}</span>
                                    </div>
                                    ${recommendation.type === 'special' ? `
                                        <div class="detail-item">
                                            <span class="detail-label">制作方式</span>
                                            <span class="detail-value">${recommendation.ingredients}</span>
                                        </div>
                                    ` : `
                                        <div class="detail-item">
                                            <span class="detail-label">产地</span>
                                            <span class="detail-value">${recommendation.origin}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">豆种</span>
                                            <span class="detail-value">${recommendation.bean}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">处理法</span>
                                            <span class="detail-value">${recommendation.process}</span>
                                        </div>
                                    `}
                                    ${recommendation.tags && recommendation.tags.length > 0 ? `
                                        <div class="detail-item">
                                            <span class="detail-label">风味 tag</span>
                                            <div class="flavor-tags">
                                                ${recommendation.tags.map(tag => `
                                                    <span class="flavor-tag">${tag}</span>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                    <div class="detail-item">
                                        <span class="detail-label">风味描述</span>
                                        <p class="flavor-description">${recommendation.flavor}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <button class="btn-back" onclick="coffeeQuiz.restart()">重新选择</button>
                        <button class="btn-next" onclick="coffeeQuiz.placeOrder()">去下单</button>
                    </div>
                `;
                this.resultContainer.innerHTML = resultHtml;
            } else {
                this.resultContainer.innerHTML = `
                    <div class="result-card">
                        <h2 class="result-title">Ooooops！</h2>
                        <p class="no-match-message">
                            抱歉，魔法暂时失效了，请咨询店内咖啡师，继续寻味属于您的咖啡饮品吧！
                        </p>
                    </div>
                    <div class="button-container">
                        <button class="btn-back" onclick="coffeeQuiz.restart()">重新选择</button>
                    </div>
                `;
            }
        } catch (error) {
            console.error('获取推荐结果时出错:', error);
            this.resultContainer.innerHTML = `
                <div class="result-card">
                    <h2 class="result-title">Ooooops！</h2>
                    <p class="no-match-message">
                        抱歉，魔法暂时失效了，请咨询店内咖啡师，继续寻味属于您的咖啡饮品吧！
                    </p>
                </div>
                <div class="button-container">
                    <button class="btn-back" onclick="coffeeQuiz.restart()">重新选择</button>
                </div>
            `;
        } finally {
            this.showLoading(false);
        }
    }

    resetQuiz() {
        this.currentQuestionId = null;
        this.answers = {};
        this.resultContainer.style.display = 'none';
        this.resultButtons.style.display = 'none';
        this.start();
    }

    goToOrder() {
        // 这里可以添加跳转到下单页面的逻辑
        alert('即将跳转到下单页面');
    }

    restart() {
        this.answers = {};
        this.showCoverPage();
    }

    placeOrder() {
        // TODO: 实现预约功能
        alert('功能开发中，敬请期待！');
    }

    showLoading(show) {
        this.loadingContainer.style.display = show ? 'flex' : 'none';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    window.coffeeQuiz = new CoffeeQuiz();
});