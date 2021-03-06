var assert = require('assert');

var movieLists = [
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
    },
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "interestingMoments": [
                    { type: "End", time:132423 },
                    { type: "Start", time: 54637425 },
                    { type: "Middle", time: 3452343}
                ]
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
                    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "interestingMoments": [
                    { type: "End", time:45632456 },
                    { type: "Start", time: 234534 },
                    { type: "Middle", time: 3453434}
                ]
            }
        ]
    }
];


// * polyfill starts here *

Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        results.push.apply(results, subArray);
    });
    return results;
};

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};

Array.prototype.reduce = function(comb, init) {
    var counter, acc;

    if (this.length === 0) {
        return this;
    } else {
        if (arguments.length === 1) {
            counter = 1;
            acc = this[0];
        } else if (arguments.length >= 2) {
            counter = 0;
            acc = init;
        } else {
            throw "Invalid arguments.";
        }

        while(counter < this.length) {
            acc = comb(acc, this[counter])
            counter++;
        }

        return [acc];
    }
};

Array.zip = function(left, right, comb) {
    var cnt, results = [];

    for(cnt = 0; cnt < Math.min(left.length, right.length); cnt++) {
        results.push(comb(left[cnt],right[cnt]));
    }

    return results;
};

// * polyfill ends here *

function getVideoObjList(movieLists) {
    return movieLists.concatMap(function(movieList) {
        return movieList.videos.concatMap(function(video) {
            return Array.zip(
                video.boxarts.reduce(function(acc,curr) {
                    if (acc.width * acc.height < curr.width * curr.height) {
                        return acc;
                    }
                    else {
                        return curr;
                    }
                }),
                video.interestingMoments.filter(function(interestingMoment) {
                    return interestingMoment.type === "Middle";
                }),
                function(boxart, interestingMoment) {
                    return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
                });
        });
    });
}

assert.deepEqual(getVideoObjList(movieLists),
    [ { id: 70111470,
    title: 'Die Hard',
    time: 323133,
    url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
  { id: 654356453,
    title: 'Bad Boys',
    time: 6575665,
    url: 'http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg' },
  { id: 65432445,
    title: 'The Chamber',
    time: 3452343,
    url: 'http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg' },
  { id: 675465,
    title: 'Fracture',
    time: 3453434,
    url: 'http://cdn-0.nflximg.com/images/2891/Fracture120.jpg' } ]);
