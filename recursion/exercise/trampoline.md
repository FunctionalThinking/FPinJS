# Trampoline

보일러 플레이트 코드는 `repeat` 정의를 포함하고 있다. `repeat`는 함수와 숫자를 받아서 숫자 만큼 함수를 호출한다.

```
var count = 0
repeat(function() {
  count++
}, 100)

console.log('executed %d times.', count)
// => executed 100 times.
```

하지만 `repeat`를 아주 큰 숫자를 가지고 호출 했을 때 스택 오버플로우를 일으킨다.

```
var count = 0
repeat(function() {
  count++
}, 100000)

console.log('executed %d times', count)
// => RangeError: Maximum call stack size exceeded
```

아래 보일러플레이트 코드를 틀램펄린을 사용하도록 수정하라.

repeat에 전달되는 함수는 인자를 받지 않는다고 가정하라. 반환 값은 중요하지 않다.

## 제약조건
- repeat 구현이 루프를 포함하도록 해서는 안된다.

## 힌트
- `repeate`가 '다음에 할 일'을 반환하도록 수정하여라
- 트램펄린은 일을 수행하고 다음에 할 일을 얻는다. 더 이상 할 일이 없을 때까지 이를 반복한다. 여기서는 루프를 이용해도 된다.
- 만약 프로그램을 수행하는데 너무 오랜 시간이 걸린다면 무언가 잘못된 것이다. 컨트롤 - C를 사용하여 노드 프로세스를 종료시켜라.

## 보일러플레이트

```
function repeat(operation, num) {
  // 스택 오버플로우가 발생하지 않도록 수정하라!
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  // trampoline을 구현하라!
  // 노트: 반환값을 필요 없음
}

var count = 0;
trampoline(repeat(function() { count++ }, 100000));
//=> count는 100000
```

