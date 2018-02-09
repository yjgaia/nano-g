let x1 = -200;
let x2 = 200;

g(() => {
	
	let color = 'blue';
	
	if (check_collision('circle_circle', {
		width1: 150, height1: 150, x1: x1,
		width2: 150, height2: 150, x2: x2
	})) {
		color = 'red';
	}
	
	draw('circle', {width: 150, height: 150, x: x1, color: color});
	draw('circle', {width: 150, height: 150, x: x2, color: color});
	
	x1 += delta_time * 100;
	x2 -= delta_time * 100;
});