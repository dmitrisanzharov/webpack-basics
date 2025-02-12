import { v4 as uuidv4 } from "uuid";
import generateJoke from './generateJoke';
import './styles/main.scss';
import alienSVG from './assets/alien-svgrepo-com.svg';

console.log('123');
console.log(generateJoke());
console.log('random id', uuidv4());

const myImg = document.getElementById('myImg');
myImg.src = alienSVG;
