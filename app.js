document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("switch");
    
    document.body.classList.add("light-mode");
    themeToggleBtn.textContent = "Wechsel zu Dunkelmodus";

    themeToggleBtn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.replace("dark-mode", "light-mode");
            themeToggleBtn.textContent = "Wechsel zu Dunkelmodus";
        } else {
            document.body.classList.replace("light-mode", "dark-mode");
            themeToggleBtn.textContent = "Wechsel zu Lichtmodus";
        }
    });
});
