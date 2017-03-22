var leftPad = require('left-pad');

document.getElementById('myDiv').innerText = '|' + leftPad('hello world', 10);
console.log('ab' + leftPad('hello', 5, 'h'))
console.log(leftPad)
