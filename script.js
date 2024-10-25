document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });
});


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
