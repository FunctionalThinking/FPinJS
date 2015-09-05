# Recursion

모듈이 의존하는 라이브러리와 그 라이브러리가 의존하는 라이브러리를 반환하는 재귀 함수를 구현하라. 알파벳 순서로 정렬되어야 하며 동일한 이름의 라이브러리가 하나 이상 존재해서는 안된다. 라이브러리는 라이브러리@버전 형식으로 출력되어야 한다. 예, 'lodash@3.10.1'

## 함수 인자

- 트리: 라이브러리 트리이다. 트리 구조는 아래 예시를 참고하라.

## 예시

```
var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
```

## 제약조건

- for/while 루프를 이용해서는 안된다.

## 보일러플레이트

```
function getDependencies(tree) {
  // 문제 해법은 여기에 작성
  // 노트: 함수 인자는 자유롭게 추가 가능
}

module.exports = getDependencies
```

## 참고자료
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
