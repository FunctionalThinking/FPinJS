var letters = ['a', 'b', 'c'];

letters[1];
//=> 'b'

function naiveNth(a, index) {
	return a[index];
}

naiveNth(letters, 1);
//=> 'b'

naiveNth({}, 1);
//=> undefined
