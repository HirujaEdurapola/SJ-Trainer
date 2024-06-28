function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iPhone|iPad|iPod|mobile|tablet/i.test(userAgent);
}

if (isMobile()) {
    window.location.href = '../web/index.html';
}