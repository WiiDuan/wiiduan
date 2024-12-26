const questions = [
    {
        id: 'q1',
        title: '您想喝热的还是冷的？',
        options: [
            { id: 'q1_1', text: '☕️ 热的', next: 'q2' },
            { id: 'q1_2', text: '🧊 冷的', next: 'q2' }
        ]
    },
    {
        id: 'q2',
        title: '您想要喝黑咖/奶咖or有甜味的特调咖啡？',
        options: [
            { id: 'q2_1', text: '黑咖    <span class="option-desc">浓缩咖啡+水</span>', next: 'q3' },
            { id: 'q2_2', text: '奶咖    <span class="option-desc">浓缩咖啡+牛奶</span>', next: 'q3' },
            { id: 'q2_3', text: '特调咖啡    <span class="option-desc">滤泡咖啡+秘制配方</span>', next: 'q4' }
        ]
    },
    {
        id: 'q3',
        title: '选择您偏好的咖啡风味？',
        options: [
            { id: 'q3_1', text: '花香' },
            { id: 'q3_2', text: '果香' },
            { id: 'q3_3', text: '酸香' },
            { id: 'q3_4', text: '酒香' },
            { id: 'q3_5', text: '黑巧克力' },
            { id: 'q3_6', text: '坚果' },
            { id: 'q3_7', text: '奶油' },
            { id: 'q3_8', text: '奶香' },
            { id: 'q3_9', text: '茶香' }
        ]
    },
    {
        id: 'q4',
        title: '选择您偏好的特调咖啡的味道',
        options: [
            { id: 'q4_1', text: '奶香' },
            { id: 'q4_2', text: '茶香' },
            { id: 'q4_3', text: '果香' },
            { id: 'q4_4', text: '巧克力' },
            { id: 'q4_5', text: '酸香' },
            { id: 'q4_6', text: '奶油' }
        ]
    }
];
