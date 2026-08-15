const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = themeToggleBtn.querySelector('.theme-icon-active');
const themeText = document.getElementById('theme-text');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Set Bootstrap 5 attribute
    htmlElement.setAttribute('data-bs-theme', newTheme);

    // Update icon and text dynamically
    if (newTheme === 'dark') {
        themeIcon.className = 'bi bi-moon-stars-fill theme-icon-active text-warning';
        themeText.textContent = 'Dark';
    } else {
        themeIcon.className = 'bi bi-sun-fill theme-icon-active';
        themeText.textContent = 'Light';
    }
});

let date = new Date();
let year = date.getFullYear();
//console.log(year)
document.querySelector("#year").innerHTML = year;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-3855518-1', 'auto');
ga('require', 'displayfeatures');
ga('require', 'GTM-WJ88MZ5');
ga('send', 'pageview');


