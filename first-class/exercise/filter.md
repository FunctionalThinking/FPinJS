# filter

## 문제

Array#filter를 이용하여 `getShortMEssages` 함수를 작성하여라.

`getShortMEssages`는 '.message' 프로퍼티를 가지는 객체의 배열을 인자로 받고 50자 이하 길이를 가지는 메세지의 배열을 반환한다.

함수는 메세지를 포함하는 배열을 반환한다. 객체를 포함하지는 않는다.

## 함수 인자

- messages: 아래와 같은 객체를 포함하는 배열

```
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // random
}
```

## 제약 조건

- for/while 루프나 Array.prototype.forEach를 사용하지 마라.
- 추가적인 함수를 생성하지 마라. 예, 헬퍼 함수.

## 힌트

- Array 메소드를 체인으로 작성해보자!

## 예시

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## 참고 자료

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 보일러플레이트

```
function getShortMessages(messages) {
  // 해법은 여기에 작성
}
```