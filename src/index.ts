import consoleMe from './consoleMe'; // CAN NOT FIND MODULE blah blah
import { v4 as uuidv4 } from "uuid";
import './styles/styles.scss';
import mainImg from './assets/chef-man-cap-svgrepo-com.svg'

consoleMe(uuidv4(),'Hello World!');

const image = document.getElementById('myImg');
image.src = mainImg;
image.style.height = '200px';