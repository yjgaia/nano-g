# nano-g
초심플 게임개발

###### index.html
```html
<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
		<title>nano-g sample</title>
	</head>
	<body>
		<script src="nano-g.min.js"></script>
		<script src="game.js"></script>
	</body>
</html>
```

###### game.js
```javascript
g(() => {
	draw('Hello World.', {size: 30});
});
```

## 명령어
모든 명령어의 형태는 다음과 같다.

`명령어(대상, 옵션)`

예를들어 원을 그린다면 다음과 같이 작성한다.

```javascript
draw('circle', {width: 30, height: 30, x: -100, y: 300});
```

## `draw`
무언가를 그린다.

다음과 같은 대상들을 가진다.
- `'rect'`
- `'circle'`
- 이미지 파일 경로
- 텍스트

다음과 같은 옵션들을 가진다.
- `x`
- `y`
- `width`
- `height`
- `flip_x` `true`/`false`
- `flip_y` `true`/`false`
- `size` 텍스트 크기 (텍스트인 경우 필수)
- `font` 텍스트 폰트 이름
- `style` 텍스트 스타일 (`'italic'`, `'bold'` 등)
- `color`
- `alpha`
- `angle`

## `play`
무언가를 재생시킨다.

대상으로는 파일 경로를 입력한다.

다음과 같은 옵션들을 가진다.
- `volume` 0~1 사이의 값
- `loop` `true`/`false`

## `stop`
무언가의 재생을 멈춘다.

대상으로는 파일 경로를 입력한다.

## `check_collision`
충돌을 체크한다.

다음과 같은 대상들을 가진다.
- `'point_rect'`
- `'point_circle'`
- `'rect_rect'`
- `'rect_circle'`
- `'circle_circle'`

다음과 같은 옵션들을 가진다.
- `x1`
- `y1`
- `width1` (`'point_rect'`/`'point_circle'`는 필요 없음)
- `height1` (`'point_rect'`/`'point_circle'`는 필요 없음)
- `angle1` (`'point_rect'`/`'point_circle'`는 필요 없음)
- `x2`
- `y2`
- `width2`
- `height2`
- `angle2`

## `check_input`
게임으로의 입력을 체크한다.

다음과 같은 대상들을 가진다.
- `'mouse'` 마우스 클릭
- 키보드 키 값 (`'a'`, `'b'`, `'c'`, `'enter'` 등)

## 변수
* `delta_time` 델타 타임 (읽기 전용)
* `window_width` 창의 너비 (읽기 전용)
* `window_height` 창의 높이 (읽기 전용)
* `mouse_x` 마우스 커서의 x 좌표 (읽기 전용)
* `mouse_y` 마우스 커서의 y 좌표 (읽기 전용)
* `game_width` 게임의 너비 지정
* `game_height` 게임의 높이 지정

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)