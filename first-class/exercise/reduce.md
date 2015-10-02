# reduce

## 문제

주어진 문자열의 배열에 대해서 `Array#reduce`를 사용하여 각 문자열이 배열 내에서 몇 번 나오는지를 나타내는 객체를 생성하여라. 객체를 직접 반환해야 한다. `Array#reduce`는 우리가 구현한 함수와 다르게 하나의 값만을 반환함을 주의하라.

## 예시

```
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

## 함수 인자

- inputWords: 문자열의 배열

## 제약 조건

- for/while 루프나 Array.prototype.forEach를 사용하지 마라.
- 추가적인 함수를 생성하지 마라. 예, 헬퍼 함수.

## 참고 자료

- https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## 보일러플레이트

```
function countWords(inputWords) {
  // 해법은 여기에 작성
}
```