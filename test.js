let reg = /^(\/[^/]+)/;
reg.exec('/test/a/1')
console.log(RegExp.$1)