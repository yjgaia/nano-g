(() => {
	let global = window;
	
	// 변수들
	global.delta_time = 0;
	global.window_width = document.documentElement.clientWidth;
	global.window_height = global.innerHeight;
	
	// 캔버스 생성
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');
	document.body.appendChild(canvas);
	
	let commands = [];
	
	// 무언가를 그린다.
	global.draw = (target, option) => {
		
	};
	
	// 무언가를 재생시킨다.
	global.play = (src, option) => {
		
	};
	
	// 무언가의 재생을 멈춘다.
	global.stop = (src) => {
		
	};
	
	// 충돌을 체크한다.
	global.check_collision = (target, option) => {
		
	};
	
	// 게임으로의 입력을 체크한다.
	global.check_input = (target, option) => {
		
	};
	
	// 개발자 도구의 콘솔에 메시지를 출력한다.
	global.log = (msg) => {
		console.log(msg);
	};
	
	// 프레임마다 실행
	let beforeTime = performance.now() / 1000;
	let step;
	requestAnimationFrame(step = (now) => {
		
		let time = now / 1000;
		delta_time = time - beforeTime;
		
		if (delta_time > 0.03) {
			delta_time = 0.03;
		}
		
		if (delta_time > 0) {
			beforeTime = time;
			
			// 화면 초기화
			context.clearRect(0, 0, window_width * devicePixelRatio, window_height * devicePixelRatio);
			
			commands.forEach((command) => {
				command();
			});
		}
		
		requestAnimationFrame(step);
	});
})();