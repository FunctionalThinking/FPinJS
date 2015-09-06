# Higher-Order Functions

고차 함수(higher-order function)은 아래 조건을 하나 이상 만족시키는 함수이다:
- 하나 이상의 함수를 인자로 받아들인다.
- 함수를 반환한다.

다른 모든 함수는 일차 함수이다.

다른 명령형 언어와 달리 JavaScript는 함수를 "일등 시민"으로 가지기 때문에 고차 함수를 이용할 수 있다. 이는 함수가 다른 값처럼 다뤄질 수 있다는 의미이다: 문자열이나 숫자처럼, 함수 값은 변수나 객체의 프로퍼티에 저장되고, 다른 함수에 인자로 전달될 수 있다. 함수 값은 객체이기 때문에 다른 객체와 마찬가지로 프로퍼티를 추가하고 값을 저장할 수 있다.

JavaScript에서 함수와 다른 값 타입과의 차이점은 호출 문법이다: 만약 함수 참조에 괄호와 콤마-구분 값이 따라올 경우: `someFunction(arg1, arg2, etc`, 함수 바디가 주어진 인자를 가지고 수행된다.

이 문제에서는 함수가 다른 함수에 인자로 전달될 수 있음을 보이고자 한다.

## 문제

함수를 첫 번째 인자로 받아들이고, 숫자 `num`을 두 번째 인자로 받아들여서 함수를 `num` 횟수 만큼 실행하는 함수를 구현하라.

아래 제공된 보일러플레이트 코드를 사용하라.

## 함수 인자
- operation: 함수, 인자를 받지 않고, 값을 반환하지 않음
- num: `operation` 호출 횟수

## 참고 자료
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

## 힌트
- 너무 깊게 생각하지 말아라,단순한 코드이다.
- 루프를 사용해도 된다. 재귀를 사용한다면 더 좋다.

## 보일러플레이트

```
function repeat(operation, num) {
  // 문제 해법은 여기에 작성
}

var count = 0;
repeat(function () {
	count++;
}, 100);
//=> count는 100
```