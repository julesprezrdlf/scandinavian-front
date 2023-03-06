const toggleMenuBtn = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

toggleMenuBtn.addEventListener('click', () => {
	menu.classList.toggle('show');
});
