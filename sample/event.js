g(() => {
	if (check_input('mouse') === true) {
		draw('circle', {width: 150, height: 150, color: 'red'});
	}
	if (check_input('enter') === true) {
		draw('circle', {width: 150, height: 150, color: 'blue'});
	}
});