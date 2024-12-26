(function flexible(window, document) {
    const docEl = document.documentElement;
    const dpr = window.devicePixelRatio || 1;

    // 设置body字体大小
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = '16px';
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize);
        }
    }
    setBodyFontSize();

    // 设置rem基准值
    function setRemUnit() {
        const rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px';
    }

    setRemUnit();

    // 监听resize事件
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            setRemUnit();
        }
    });

    // 设置dpr
    if (dpr >= 2) {
        const fakeBody = document.createElement('body');
        const testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent';
        fakeBody.appendChild(testElement);
        docEl.appendChild(fakeBody);
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines');
        }
        docEl.removeChild(fakeBody);
    }
}(window, document)); 