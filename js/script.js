document.addEventListener('DOMContentLoaded', function () {
	const body = document.body;
	const bdThemeToggle = document.getElementById('bd-theme');
	const themeText = document.getElementById('bd-theme-text');

	bdThemeToggle.addEventListener('click', function () {
		// Cambia el modo entre claro y oscuro
		body.classList.toggle('dark-mode');
		body.classList.toggle('light-mode');

		// Actualiza el texto del botón y el icono
		if (body.classList.contains('dark-mode')) {
			bdThemeToggle.setAttribute('aria-label', 'Toggle theme (light)');
			themeText.innerText = 'Toggle theme (light)';
		} else {
			bdThemeToggle.setAttribute('aria-label', 'Toggle theme (dark)');
			themeText.innerText = 'Toggle theme (dark)';
		}
	});
});