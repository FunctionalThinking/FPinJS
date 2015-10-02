var assert = require('assert');

var loremIpsum = [
    {message: 'Velit eiusmod enim Lorem mollit officia dolor sunt adipisicing.'},
    {message: 'Elit ut elit mollit tempor dolore duis deserunt eu consectetur.'},
    {message: 'Laborum ipsum cupidatat esse commodo.'},
    {message: 'Sint culpa sunt cillum laborum amet in laboris aliqua do deserunt mollit id ipsum laboris.'},
    {message: 'Aute consectetur sint amet enim dolore.'}
];

function getShortMessages(messages) {
    return messages.filter(function(item) {
        return item.message.length < 50;
    }).map(function(item) {
        return item.message;
    });
}

assert.deepEqual(getShortMessages(loremIpsum),
    ['Laborum ipsum cupidatat esse commodo.',
    'Aute consectetur sint amet enim dolore.']);