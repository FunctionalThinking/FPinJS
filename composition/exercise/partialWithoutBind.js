var slice = Array.prototype.slice;

function logger(namespace) {
  // 해법은 여기에 작성
}

var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
