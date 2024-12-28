import './style.css'
import 'dotenv/config'
import config from './config.js'
import Card from './Components/Card.js'

document.querySelector('#app').innerHTML = `
<h1 class="text-blue-600">Hello Sushil!</h1>
`
const url = import.meta.env.VITE_API_URL;

alert(url);
console.log(process.env);
