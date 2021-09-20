const drawing = () => {
	const canvas = document.querySelector('#drawing');
	if (canvas.getContext) {
		const ctx = canvas.getContext('2d');

		const position = (e) => {

		}
		const mouseDown = (e) => {

		}
	} else {
		alert('Canvas API should be supported in your browser')
	}
}
const themeSwitcher = () => {
	let controls = document.querySelectorAll('.theme-switcher__input'),
		editor = document.querySelector('.editor'),
		classes = [];
	controls.forEach((control) => {
		classes.push(control.value);
		control.addEventListener('change', () => {
			editor.classList.remove(...classes);
			editor.classList.add(control.value);
		})
	})
}
document.addEventListener('DOMContentLoaded', () => {
	drawing();
	themeSwitcher();
})