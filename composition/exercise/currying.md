# Currying

다음은 3개의 인자를 가지는 함수를 커리하는 `curry3` 구현 코드이다.

```
function curry3(fun){
  return function(one){
    return function(two){
      return function (three){
        return fun(one, two, three)
      }
    }
  }
}
```

위의 함수를 사용하여 아래 함수를 커리시키면:

```
function abc(one, two, three) {
  return one/two/three
}
```

다음과 같이 된다:

```
var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)

console.log(curryA(2)) // => 1
```

## 문제

위의 예시를 참고하여 임의의 수의 인자를 위한 'curry' 함수를 구현하라.
`curryN` 함수는 다음의 두 개의 인자를 받아들인다:
- fn: 커리하려는 하는 함수
- n: 커리하려는 인자의 수. 제공하지 않을 경우, `curryN`은 fn의 인자 수를 n 값으로 사용한다.

## 예시

```
function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
```

## 제약 조건

- for/while 루프나 `Array.prototype.forEach`를 사용 금지

## 힌트

- 함수의 .length 프로퍼티를 통하여 함수에 전달되는 인자의 수를 알아낼 수 있다.

## 보일러플레이트

```
function curryN(fn, n) {
  // 해법은 여기에 작성
}

module.exports = curryN
```