const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const languageButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-es][data-en]");
const year = document.getElementById("year");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
}

function setLanguage(language) {
  translatableElements.forEach((element) => {
    const translation = element.dataset[language];

    if (translation) {
      const liveDot = element.querySelector(".live-dot");

      if (liveDot) {
        element.childNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = "";
          }
        });

        element.append(" " + translation);
      } else {
        element.textContent = translation;
      }
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.lang === language
    );
  });

  document.documentElement.lang = language;

  localStorage.setItem("pdvLanguage", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("pdvLanguage") || "es";
setLanguage(savedLanguage);

if (year) {
  year.textContent = new Date().getFullYear();
}
