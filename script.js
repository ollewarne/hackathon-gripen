const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");
const resetBtn = document.getElementById("resetBtn");

// Funktion för att sätta tema
function setTheme(theme) {
  body.className = theme;
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Funktion för att följa systemets tema
function applySystemTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
}

// Kolla om användaren redan valt manuellt
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  applySystemTheme();
}

// När användaren klickar på växlingsknappen
toggleBtn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});

// När användaren klickar på återställ-knappen
resetBtn.addEventListener("click", () => {
  localStorage.removeItem("theme"); // ta bort manuellt val
  applySystemTheme(); // följ systemet igen
});

// Lyssna på systemändringar i realtid
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (!localStorage.getItem("theme")) { // bara om användaren inte valt manuellt
    setTheme(e.matches ? "dark" : "light");
  }
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Visa/dölj knappen vid scroll
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
});

// Scrolla uppåt smidigt
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
