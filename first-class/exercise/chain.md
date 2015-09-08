# chain

## 문제

무비 리스트로부터 각 비디오의 id, title, 중간 시간대의 흥미로운 장면, 가장 작은 박스 아트 url을 얻어내라.

각 비디오는 흥미로운 장면의 컬렉션을 가진다. "중간"의 흥미로운 장면과 가장 작은 박스 아트의 url을 zip으로 엮어서 얻어내라.

무비 리스트는 아래 예시와 같은 형태를 가진다.

각 video 객체에 대해서 {id, title, time, url} 객체를 반환하도록 하라.

## 예시

```
var movieLists =[
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [
                    { type: "End", time:213432 },
                    { type: "Start", time: 64534 },
                    { type: "Middle", time: 323133}
                ]
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [
                    { type: "End", time:54654754 },
                    { type: "Start", time: 43524243 },
                    { type: "Middle", time: 6575665}
                ]
            }
        ]
    }]
```

## 제약 조건

- `concatAll`, `concatMap`, `zip`을 사용하여라.
- `Array#reduce` 대신 polyfill한 `reduce`를 사용하여라.

## 보일러플레이트

```
function getVideoObjList(objList) {
    // 해법은 여기에 작성
}
```