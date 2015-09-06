# Partial Application with Bind

## 문제

**Function#bind**를 사용하여 로깅 함수를 구현하라.

함수는 네임스페이스 문자열을 받고 네임스페이스 문자열을 붙여서 콘솔에 메세지를 출력하는 함수를 반환한다.

로깅 함수에 전달되는 모든 인자는 출력되야 한다.

\*\* 콘솔에 직접 출력하라. \*\*

## 함수 인자

- namespace: 반환된 함수에 전달되는 메세지에 더해질 문자열

## 예시

```
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

## 제약 조건

- Function#bind를 사용하라.

## 보일러플레이트

```
var slice = Array.prototype.slice;

function logger(namespace) {
  // 해법은 여기에 작성
}
```

## 참고 자료

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind