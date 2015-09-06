# Partial Application without Bind

부분 적용(partial application)은 기존의 함수로부터 새로운 함수를 만들어낸다. 이 때 임의의 수의 인자를 고정시킨다. 인자를 고정시킨 이후에 나머지 인자를 받아들이는 새로운 함수를 얻고 이 함수는 기존의 함수를 실행시킨다.

좀 더 형식적으로 말하자면: 부분 적용은 함수에 복수의 인자를 고정시키고, 원래의 함수보다 더 적은 수의 인자를 가지는 함수를 만들어내는 프로세스이다.

예를 들어, 두 개의 인자를 받아들여 더하는 `add`라는 함수를 생각해보자:

```
function add(x, y) {
  return x + y
}

add(10, 20) // => 30
```

`partiallyApply` 라는 함수가 있다고 할 때, 이 함수는 하나의 함수와 '부분적으로 적용할' 인자를 받아들인다.

`add` 함수에 첫 인자 `x`를 '부분적으로 적용'해보자:

```
var addTen = partiallyApply(add, 10) // fix `x` to 10
```

`addTen`은 `add`의 인자 `y`를 받아들이는 새로운 함수이다. `add`는 아직 호출되지 않았다!

`y`에 대응하는 인자를 전달하면, 원래의 `add` 함수를 실행시킨다.

```
addTen(20) // => 30
addTen(100) // => 110
addTen(0) // => 10

// etc
```

위의 예시는 모두 `add(10, y)`를 호출하는 것과 같다. `y`는 `addTen`이라 이름붙여진 함수 호출 시에 제공된다.

## 문제

부분 적용을 이용하여 `console.log`의 첫 번째 인자를 고정시키는 함수를 구현하자. 네임스페이스 문자열을 출력에 더하는 로깅 함수를 만들어라.

함수는 네임스페이스 문자열을 받고 네임스페이스 문자열을 붙여서 콘솔에 메세지를 출력하는 함수를 반환한다.

`Function#apply` 함수를 이용하여 부분 적용을 구현하라.

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

- Function#bind는 사용하면 안된다.
- Function#apply를 사용하라.

## 보일러플레이트

```
var slice = Array.prototype.slice

function logger(namespace) {
  // 해법은 여기에 작성
}
```

## 참고 자료

- https://en.wikipedia.org/wiki/Partial_application
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## 힌트

`console.log`가 콤마로 구분된 임의의 수의 인자를 받아서 출력한다는 것을 기억하라.

```
console.log('hello', 'world') // => 'hello world'
console.log(1,2,3) // => 1 2 3
```

우리가 원하는 것은 `console.log`에 첫 번째 인자를 '부분적으로 적용'하는 것이다.

`Function.prototype.apply`는 하나의 함수를 실행시키며, 이 때 새로운 'this 값'과 실행시킬 함수에 적용할 인자의 배열을 제공한다.

```
add(10, 20) // => 30
add.apply(null, [10, 20]) // => 30
```

`apply`와는 대조적으로 `Function.prototype.call`에는 콤마로 구분된 인자를 제공한다:

```
add.apply(null, [10, 20]) // => 30
add.call(null, 10, 20) // => 30
```