// 全局错误处理
window.onerror = function(msg, url, lineNo, columnNo, error) {
    showError(`发生错误: ${msg}`);
    return false;
};

// Promise 错误处理
window.addEventListener('unhandledrejection', function(event) {
    showError(`Promise错误: ${event.reason}`);
});

// 显示错误消息
function showError(message) {
    const errorToast = document.getElementById('error-toast');
    const errorMessage = errorToast.querySelector('.error-message');
    
    errorMessage.textContent = message;
    errorToast.style.display = 'block';
    
    // 3秒后自动隐藏
    setTimeout(() => {
        errorToast.style.display = 'none';
    }, 3000);
}

// 导出错误处理函数供其他模块使用
window.handleError = showError;
