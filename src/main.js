import './style.css'

document.querySelector('#app').innerHTML = `
<h1 class="text-blue-600">Hello Sushil!</h1>
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init()</script>
`
console.log(import.meta.env.VITE_API_KEY);
console.log(import.meta.env.VITE_BASE_URL);
