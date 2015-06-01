var _ = require('lodash');

function existy(x) { return x != null };
function truthy(x) { return (x !== false) && existy(x) };

function cat() {
	var head = _.first(arguments);
	if (existy(head)) {
		return head.concat.apply(head, _.rest(arguments));
	} else {
		return [];
	}
}

function construct(head, tail) {
	return cat([head], _.toArray(tail));
}

function doWhen(cond, action) {
	if (truthy(cond)) {
		return action();
	} else {
		return undefined;
	}
}

function always(VALUE) {
	return function() {
		return VALUE;
	};
}

function invoker(NAME, METHOD) {
	return function(target) {
		if (!existy(target)) fail("Must provide a target");
		var targetMethod = target[NAME];
		var args = _.rest(arguments);

		return doWhen((existy(targetMethod) && METHOD === targetMethod), function() {
			return targetMethod.apply(target, args);
		});
	};
};

// chapter 5

function dispatch() {
	var funs = _.toArray(arguments);
	var size = funs.length;

	return function(target) {
		var ret = undefined;
		var args = _.rest(arguments);

		for (var funIndex = 0; funIndex < size; funIndex++) {
			var fun = funs[funIndex];
			ret = fun.apply(fun, construct(target, args));
			if (existy(ret)) return ret;
		}

		return ret;
	};
}

var str = dispatch(invoker('toString', Array.prototype.toString),
	invoker('toString', String.prototype.toString));

console.log(str("a"));
console.log(str(_.range(10)));

function stringReverse(s) {
	if (!_.isString(s)) return undefined;
	return s.split('').reverse().join("");
}

console.log(stringReverse("abc"));
console.log(stringReverse(1));

var rev = dispatch(invoker('reverse', Array.prototype.reverse), stringReverse);
console.log(rev([1, 2, 3]));
console.log(rev("abc"));

var sillyReverse = dispatch(rev, always(42));
console.log(sillyReverse([1, 2, 3]));
console.log(sillyReverse("abc"));
console.log(sillyReverse(100000));

/*
function performCommandHardcoded(command) {
	var result;

	switch(command.type) {
		case 'notify':
			result = notify(command.message);
			break;
		case 'join':
			result = changeView(command.target);
			break;
		default:
			alert(command.type);
	}

	return result;
}

performCommandHardcoded({type: 'notify', 'message': 'hi!'});
// does the notify action

performCommandHardcoded({type: 'join', target: 'waiting-room'});
// does the changeView action

performCommandHardcoded({type: 'wat'});
// pops up an alert box

*/

function notify() { console.log("notify"); return true };
function changeView() { console.log("changeView"); return true };
function shutdown() { console.log("shutdown"); return true };
function alert() { console.log("alert") };

function isa(type, action) {
	return function(obj) {
		if (type === obj.type) return action(obj);
	}
}

var performCommand = dispatch(
	isa('notify', function(obj) { return notify(obj.message) }),
	isa('join', function(obj) { return changeView(obj.target) }),
	function(obj) { alert(obj.type) });

var performAdminCommand = dispatch(
	isa('kill', function(obj) { return shutdown(obj.hostname) }),
	performCommand);

performAdminCommand({type: 'kill', hostname: 'localhost'});
performAdminCommand({type: 'fail'});
performAdminCommand({type: 'join', target: 'foo'});
// does the changeView action

var performTrialUserCommand = dispatch(
	isa('join', function(obj) { alert("Cannot join until approved") }),
	performCommand);

performTrialUserCommand({type: 'join', target: 'foo'});
performTrialUserCommand({type: 'notify', message: 'Hi new user'});