# map

## 문제

다음의 코드를 for-loop로부터 Array#map을 사용하도록 변경하여라.

```
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}


```

# 함수 인자

- numbers: 숫자를 가지는 배열

# 제약 조건

- Array.prototype.map()을 사용하라.
- for/while 루프나 Array.prototype.forEach를 사용하지 마라.
- 추가적인 함수를 생성하지 마라. 예, 헬퍼 함수.

# 참고 자료

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

# 보일러플레이트

```
function doubleAll(numbers) {
  // 해법은 여기에 작성
}

assert.deepEqual(doubleAll([1]), [2]);
assert.deepEqual(doubleAll([1, 2, 4]), [2, 4, 8]);
```