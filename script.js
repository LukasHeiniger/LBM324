// smooth scrooling bei links anklicken

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//fade out
const fadeOutAndNavigate = (url) => {
    document.body.classList.add('fade-out');


    setTimeout(() => {
        window.location.href = url;
    }, 200);
};


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.href !== window.location.href && this.pathname !== window.location.pathname) {
            event.preventDefault();
            fadeOutAndNavigate(this.href);
        }
    });
});


//fade in

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');


    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 200);


});


// Darkmode

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    const isDarkMode = () => document.documentElement.hasAttribute('data-theme');

    const toggleTheme = () => {
        if (isDarkMode()) {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = '💡';
            localStorage.setItem('theme', 'dark');
        }
    };


    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '💡';
    } else {
        themeToggleBtn.textContent = '🌙';
    }


    themeToggleBtn.addEventListener('click', toggleTheme);
});
