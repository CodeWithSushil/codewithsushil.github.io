/* 
 * Name: Code With Sushil
 * URL: https://codewithsushil.github.io 
*/

const routes = {
  '/': '<h1>Home</h1><a href="/about" id="about-link">About</a>',
  '/about': '<h1>About</h1><a href="/" id="home-link">Home</a>',
};

function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  document.getElementById('app').innerHTML = routes[path];
}

window.onpopstate = () => {
  document.getElementById('app').innerHTML = routes[window.location.pathname];
};

document.addEventListener('click', (e) => {
  if (e.target.id === 'about-link') {
    e.preventDefault();
    navigateTo('/about');
  } else if (e.target.id === 'home-link') {
    e.preventDefault();
    navigateTo('/');
  }
});

navigateTo(window.location.pathname);
