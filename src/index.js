import { v4 as uuidv4 } from "uuid";
import './styles.scss';
import myImg from "./assets/hat-chef-svgrepo-com.svg";
console.log('random id', uuidv4());

const imgDiv = document.getElementById('imgId');
imgDiv.src = myImg;
imgDiv.style.width = '40px';