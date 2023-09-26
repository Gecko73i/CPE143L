
    document.addEventListener("DOMContentLoaded", function () {
        const darkModeToggle = document.getElementById("darkModeToggle");
        const body = document.body;
    
        // Check if dark mode is enabled in local storage
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.checked = true;
        }
    
        // Toggle dark mode
        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    });