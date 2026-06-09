document.addEventListener("DOMContentLoaded", function () {

    let anchors = document.querySelectorAll('a[href*="#"]')
    let btnDarkMode = document.querySelector(".dark-mode-btn");

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }

    // 1. Проверка темной темы на уровне системых настроем
    // if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    //     btnDarkMode.classList.add("dark-mode-btn--active");
    //     document.body.classList.add("dark");
    // }

    // 2. Проверка темной темы в localStorage
    if (localStorage.getItem("darkMode") === "dark"){
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
    }else if (localStorage.getItem("darkMode") === "light"){
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }

    // Если меняются системные настройки, меняем тему
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event)=>{
        const newColorScheme = event.matches ? "dark" : "light";
        if (newColorScheme === "dark"){
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else{
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            this.location.setItem("darkMode", "light");
        }
    });
    
    // Нажатие на кнопку режима темы
    btnDarkMode.addEventListener('click', function (e) {
        this.classList.toggle("dark-mode-btn--active");
        let isDark = document.body.classList.toggle("dark");

        if (isDark){
            localStorage.setItem("darkMode", "dark");
        }else{
            localStorage.setItem("darkMode", "light");
        }
    });
    
});