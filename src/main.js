import './style.css'
import config from './config.js'

document.querySelector('#app').innerHTML = `
<h1 class="text-blue-600">Hello Sushil!</h1>
`
const url = import.meta.env.VITE_API_URL;

alert(url);
