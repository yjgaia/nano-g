# nano-g
초심플 게임개발

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
- `size` 텍스트 크기
- `font` 텍스트의 폰트 이름
- `color`
- `alpha`
- `angle`

## `play`
무언가를 재생시킨다.

대상으로는 파일 경로를 입력한다.

다음과 같은 옵션들을 가진다.
- `volume`
- `loop`

## `stop`
무언가의 재생을 멈춘다.

대상으로는 파일 경로를 입력한다.

## `check_collision`
충돌을 체크한다.

다음과 같은 대상들을 가진다.
- `'rect_rect'`
- `'circle_circle'`
- `'rect_circle'`
- `'circle_rect'`

다음과 같은 옵션들을 가진다.
- `x1`
- `y1`
- `width1`
- `height1`
- `angle1`
- `x2`
- `y2`
- `width2`
- `height2`
- `angle2`

## `check_input`
게임으로의 입력을 체크한다.

다음과 같은 대상들을 가진다.
- `'mouse_left'` 마우스 왼클릭
- `'mouse_right'` 마우스 오른클릭
- 키보드 키 값

## `log`
개발자 도구의 콘솔에 메시지를 출력한다.

대상으로는 메시지를 입력한다.

## 변수
* `window_width` 창의 너비
* `window_height` 창의 높이
* `delta_time` 델타 타임