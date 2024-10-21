/* 
 * Name: Code With Sushil
 * URL: https://codewithsushil.github.io 
*/
/*
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

*/

const routes = {
  '/': './src/home.html',
  '/about': './src/about.html',
  '/contact': './src/contact.html',
};

function navigateTo(path) {
  // Use History API to change the browser's URL without reloading
  window.history.pushState({}, path, window.location.origin + path);
  
  // Fetch the component (HTML fragment) and insert it into the #app div
  fetchComponent(path);
}

function fetchComponent(path) {
  const componentUrl = routes[path] || routes['/'];

  // Fetch the HTML component and render it in the #app container
  fetch(componentUrl)
    .then(response => response.text())
    .then(html => {
      document.getElementById('app').innerHTML = html;
    })
    .catch(() => {
      document.getElementById('app').innerHTML = '<h1>404 Not Found</h1>';
    });
}

// Handle browser navigation (back/forward)
window.onpopstate = () => {
  fetchComponent(window.location.pathname);
};

// Event listener for navigation clicks
document.addEventListener('click', (e) => {
  const { target } = e;

  if (target.tagName === 'A') {
    e.preventDefault();
    navigateTo(target.getAttribute('href'));
  }
});

// Initialize by loading the current route
fetchComponent(window.location.pathname);
