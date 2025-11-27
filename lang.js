let currentleng = "en";

// Cargar archivo JSON según idioma
async function loadleng(lang) {
        const response = await fetch(`./lang/${lang}.json`);
        const text = await response.json();
        updatetext(text);
}

// Actualizar textos de hero
function updatetext(text) {
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = text[key] || "";
    });

    document.getElementById("lang-btn").textContent =
        currentleng === "es" ? "English" : "Español";
}

// Evento del botón
document.getElementById("lang-btn").addEventListener("click", () => {
    currentleng === "en" ? "es" : 'en';
    loadleng(currentleng);
});

// Cargar idioma inicial
console.log(loadleng(currentleng));



//save lenguage in local storage
currentleng = localStorage.getItem("idioma") || "es";

document.getElementById("lang-btn").addEventListener("click", () => {
    currentleng = currentleng === "es" ? "en" : "es";
    localStorage.setItem("idioma", currentleng);
    loadleng(currentleng);
});