(() => {
	let global = window;
	
	// 변수들
	global.delta_time = 0;
	global.window_width = document.documentElement.clientWidth;
	global.window_height = global.innerHeight;
	
	// 캔버스 생성
	let canvas = document.createElement('canvas');
	let context = canvas.getContext('2d');
	
	canvas.width = window_width;
	canvas.height = window_height;
	
	canvas.style.position = 'fixed';
	canvas.style.left = 0;
	canvas.style.top = 0;
	canvas.style.zIndex = -1;
	
	document.body.appendChild(canvas);
	
	global.addEventListener('resize', () => {
		global.window_width = document.documentElement.clientWidth;
		global.window_height = global.innerHeight;
		canvas.width = window_width;
		canvas.height = window_height;
	}, false);
	
	let logics = [];
	
	// 게임 로직 등록
	global.g = (logic) => {
		logics.push(logic);
	};
	
	let images = {};
	
	// 무언가를 그린다.
	global.draw = (target, option) => {
		
		let x;
		let y;
		let width;
		let height;
		let color;
		let alpha;
		let angle;
		
		// 옵션 초기화
		if (option !== undefined) {
			x = option.x;
			y = option.y;
			width = option.width;
			height = option.height;
			color = option.color;
			alpha = option.alpha;
			angle = option.angle;
		}
		
		if (x === undefined) {
			x = 0;
		}
		if (y === undefined) {
			y = 0;
		}
		if (color === undefined) {
			color = '#ffffff';
		}
		if (alpha === undefined) {
			alpha = 1;
		}
		if (angle === undefined) {
			angle = 0;
		}
		
		context.save();
		
		context.translate(x, y);
		context.rotate(angle * Math.PI / 180);
		context.globalAlpha = alpha;
		
		// 사각형
		if (target === 'rect') {
			context.beginPath();
			context.rect(-width / 2, -height / 2, width, height);
			context.fillStyle = color;
			context.fill();
			context.closePath();
		}
		
		// 원
		else if (target === 'circle') {
			context.beginPath();
			context.ellipse(0, 0, width / 2, height / 2, 0, 0, 2 * Math.PI);
			context.fillStyle = color;
			context.fill();
			context.closePath();
		}
		
		// 이미지
		else if (option === undefined || (option.size === undefined && option.font === undefined)) {
			let image = images[target];
			if (image === undefined) {
				images[target] = image = new Image();
				image.src = target;
			}
			if (image.naturalWidth !== 0) {
				let drawWidth = width !== undefined ? width : image.width;
				let drawHeight = height !== undefined ? height : image.height;
				context.drawImage(image, -drawWidth / 2, -drawHeight / 2, drawWidth, drawHeight);
			}
		}
		
		// 텍스트
		else {
			context.font = option.size + 'px ' + (option.font === undefined ? 'Arial' : option.font);
			context.fillStyle = color;
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			context.fillText(target, 0, 0);
		}
		
		context.restore();
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
			context.save();
			context.scale(devicePixelRatio, devicePixelRatio);
			context.translate(window_width / 2, window_height / 2);
			
			logics.forEach((logic) => {
				logic();
			});
			
			context.restore();
		}
		
		requestAnimationFrame(step);
	});
})();