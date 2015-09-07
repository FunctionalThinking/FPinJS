/*
first-class functions and applicative programming
*/

Array.zip = function(left, right, comb) {
    var cnt, results = [];

    for(cnt = 0; cnt < Math.min(left.length, right.length); cnt++) {
        results.push(comb(left[cnt],right[cnt]));
    }

    return results;
};

Array.zip([1, 2, 3], [4, 5, 6], function(left, right) { 
    return left + right});
//=> [5, 7, 9]

var videos = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
    }
],
bookmarks = [
    {id: 470, time: 23432},
    {id: 453, time: 234324},
    {id: 445, time: 987834}
];

var r = Array.zip(videos, bookmarks,
    function(video, bookmark) {
        return {videoId: video.id, bookmarkId: bookmark.id}; });
//=> [ { videoId: 70111470, bookmarkId: 470 },
//  { videoId: 654356453, bookmarkId: 453 },
//  { videoId: 65432445, bookmarkId: 445 } ]