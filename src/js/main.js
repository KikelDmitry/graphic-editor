const initCanvas = () => {
	const canvas = document.querySelector('#canvas');
	if (canvas.getContext) {
		// vars
		const ctx = canvas.getContext('2d');
		const colorPicker = document.querySelector('[type="color"]');

		// state
		const state = {
			action: 'up',
			position: [],
			color: colorPicker.value,
			lineWidth: 1,
		}

		const getPosition = (e) => {
			const rect = canvas.getBoundingClientRect();
			state.position.unshift({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			})
			state.position.splice(2, 1);
		}
		const drawing = (color) => {
			ctx.strokeStyle = color;
			if(state.action === 'down') {
				ctx.beginPath();
				ctx.moveTo(state.position[0].x, state.position[0].y);
				ctx.lineTo(state.position[1].x, state.position[1].y);
				ctx.lineWidth = 4;
				ctx.stroke();
			}
		}
		const clear = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
		canvas.addEventListener('mousemove', (event) => {
			getPosition(event);
			drawing(state.color)
		})
		canvas.addEventListener('mousedown', () => {
			state.action = 'down';
		})
		canvas.addEventListener('mouseup', () => {
			state.action = 'up';
		})
		canvas.addEventListener('mouseout', () => {
			state.action = 'up';
		})
	} else {
		alert('Canvas API should be supported in your browser');
		return;
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
	initCanvas();
	themeSwitcher();
})

// stackoverflow
// var action = "up";
// var ctx, points, pointer;
// function initcnvs() {
// 	ctx = document.getElementById('drawing').getContext('2d');
// 	ctx.globalAlpha = 0.1;
// 	points = new Array(10);
// };
// function mDown(e) {
// 	action = "down";
// 	points[0] = [e.pageX, e.pageY];
// 	pointer = 0;
// };
// function mUp(e) {
// 	points = new Array(10);
// 	action = "up";
// };
// function mMove(e) {
// 	if (action == "down") {
// 		var nextpoint = pointer + 1;
// 		if (nextpoint > 9) nextpoint = 0;
// 		ctx.beginPath();
// 		ctx.moveTo(points[pointer][0], points[pointer][1]);
// 		ctx.lineTo(e.pageX, e.pageY);
// 		if (points[nextpoint]) {
// 			ctx.moveTo(points[nextpoint][0] + Math.round(Math.random() * 10 - 5), points[nextpoint][1] + Math.round(Math.random() * 10 - 5));
// 			ctx.lineTo(e.pageX, e.pageY);
// 		}
// 		ctx.stroke();
// 		pointer = nextpoint;
// 		points[pointer] = [e.pageX, e.pageY];
// 	}
// };