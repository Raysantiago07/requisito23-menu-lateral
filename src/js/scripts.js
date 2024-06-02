// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
});
