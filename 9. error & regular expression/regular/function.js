let re;
re = /hello/;
re = /hello/g; // g - global search
re = /hello/i; // i - case sensitive
console.log('Regular Expression: ' + re);
console.log('Source: ' + re.source);

// exec() - Return result in an array or null
let result = re.exec('nam hello world');
console.log('re.exec(str) - Return result in an array or null: ');
console.log(result);

// test() - Returns true of false
result = re.test('hellos');
console.log('re.test(str) - Returns true of false: ' + result);

// match() - Return result aray or null
let str = 'Hello There';
result = str.match(re);
console.log('str.match(re) - Return result in an array or null: ');
console.log(result);

// search() - Returns index of the first match if not found returns -1
str = 'Nam Hello There';
result = str.search(re);
console.log('str.search(re) - Returns index of the first match if not found returns -1: ' + result);

// replace() - Return new string with some of all matches of a pattern
str = 'Hello There'; 
let newStr = str.replace(re, 'Hi');
console.log('str.replace(re, newStr) - Return new string: ' + newStr);
