g(() => {
	if (check_input('mouse')) {
		draw('circle', {width: 150, height: 150, color: 'red'});
	}
	if (check_input('enter')) {
		draw('circle', {width: 150, height: 150, color: 'blue'});
	}
});