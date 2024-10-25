document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('switch'); 
    const currentTheme = localStorage.getItem('theme') || 'light';

    
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }


    toggleSwitch.addEventListener('click', function() { 
        const newTheme = toggleSwitch.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        document.querySelectorAll('nav, #home, #portfolio, #contact, footer, .project')
            .forEach(el => el.setAttribute('data-theme', newTheme));
        localStorage.setItem('theme', newTheme);
    });
});
