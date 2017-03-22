var leftPad = require('left-pad');
var greeting = require('./greeting');

document.getElementById('myDiv').innerText = leftPad(greeting, 15, 'h');
