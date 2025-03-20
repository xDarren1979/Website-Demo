let titles = ["Welcome", "to", "my", "Website"];
let currentTitleIndex = 0;

function changeTitle() {
    document.title = titles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % titles.length; // Wechseln zwischen den Titeln
}

setInterval(changeTitle, 1500);

document.querySelector(".dropdown-btn").addEventListener("click", function () {
    var menu = document.querySelector(".dropdown-menu");
    menu.classList.toggle("show");
});

// Schließt das Dropdown, wenn irgendwo außerhalb geklickt wird
window.addEventListener("click", function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdown = document.querySelector('.dropdown-menu');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const deButton = document.getElementById("de");
    const enButton = document.getElementById("en");

    deButton.addEventListener("click", function (event) {
        event.preventDefault(); // Verhindert das Neuladen der Seite
        textElement.textContent = "Hallo! Willkommen auf meiner Website.";
    });

    enButton.addEventListener("click", function (event) {
        event.preventDefault();
        textElement.textContent = "Hello! Welcome to my website.";
    });
});