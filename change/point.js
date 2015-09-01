function Point(x, y) {
	this._x = x;
	this._y = y;
}

Point.prototype = {
	withX: function(val) {
		return new Point(val, this._y);
	},
	withY: function(val) {
		return new Point(this._x, val);
	}
};

var p = new Point(0, 1);
p.withX(1000);
// console.log(p.withX(1000));
//=> {_x: 1000, _y: 1}

p;
// console.log(p);
//=> {_x: 0, _y: 1}

(new Point(0, 1))
	.withX(100)
	.withY(-100);
//=> {_x: 100, _y: -100}
