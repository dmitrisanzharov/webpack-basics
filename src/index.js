// import foo from './foo.js';
import './index.scss';
const foo = require('./foo');
const { omg, blah } = require('./bar');
console.log("foo: ", foo);
// const img = require('./cdn.svg');

console.log('all running');
// console.log(process.env);

// const myImg = document.getElementById('img1');
// myImg.src = img;
// myImg.style = 'width: 100px; height: 100px;';

omg();
console.log(blah);