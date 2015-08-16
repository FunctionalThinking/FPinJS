var shdowed = 0;

function argShdow(shdowed) {
	return ["Value is", shdowed].join(' ');
}

argShdow(108);
// console.log(argShdow(108));
//=> "Value is 108";

argShdow();
// console.log(argShdow());
//=> "Value is "