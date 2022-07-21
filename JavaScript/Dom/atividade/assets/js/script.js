const body = document.getElementsByTagName('body');
const title = document.getElementById('title');
const button = document.getElementById('btn');

function setDarkMode() {
    body[0].classList.toggle("dark-mode");
    title.innerHTML = "Dark Mode On";
    button.innerHTML = "Light Mode";
    if (!body[0].classList.contains("dark-mode")) {
        title.innerHTML = "Light Mode On";
        button.innerHTML = "Dark Mode"; 
    }
}

button.addEventListener("click", setDarkMode);