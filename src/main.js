import './style.css';
import config from './main.js';

document.querySelector('#app').innerHTML = `
<h1 class="text-blue-600">Hello Sushil!</h1>
`;

console.log(import.meta.env.VITE_API_KEY);
console.log(import.meta.env.VITE_BASE_URL);

console.log(config.API_KEY);
console.log(config.BASE_URL);
