function showPage(pageName) {
    const pages = document.querySelectorAll('.page');

    pages.forEach(function (page) {
        page.classList.add('hidden');
    });

    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showPage('home');
});