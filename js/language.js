// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((input) => {
    const key = input.getAttribute("data-i18n-placeholder");
    input.setAttribute("placeholder", langData[key] || key); // Fallback to key if translation is missing
  });
}
// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const currentPath = window.location.pathname;
  let jsonPath;
  if (currentPath.includes("pages/")) {
    jsonPath = `../languages/${lang}.json`; // Adjusted path for pages inside the 'pages' folder
  } else {
    jsonPath = `languages/${lang}.json`; // Path for the main 'index.html'
  }
  const response = await fetch(jsonPath);
  return response.json();
}
// Function to change language
async function changeLanguage() {
  let lang = localStorage.getItem("language");
  if (lang === "en") {
    await setLanguagePreference("ar");
    const langData = await fetchLanguageData("ar");
    updateContent(langData);
    toggleArabicStylesheet("ar"); // Toggle Arabic stylesheet
  } else {
    await setLanguagePreference("en");
    const langData = await fetchLanguageData("en");
    updateContent(langData);
    toggleArabicStylesheet("en"); // Toggle Arabic stylesheet
  }
}
// Function to toggle Arabic stylesheet based on language selection
function toggleArabicStylesheet(lang) {
  const head = document.querySelector("head");
  const link = document.querySelector("#styles-link");

  // Determine the correct path to the Arabic stylesheet based on the current page location
  const currentPath = window.location.pathname;
  let stylesheetPath;

  if (currentPath.includes("pages/")) {
    stylesheetPath = "../css/style-ar.css"; // Adjusted path for pages inside the 'pages' folder
  } else {
    stylesheetPath = "css/style-ar.css"; // Path for the main 'index.html'
  }
  if (link) {
    head.removeChild(link); // Remove the old stylesheet link
  } else if (lang === "ar") {
    const newLink = document.createElement("link");
    newLink.id = "styles-link";
    newLink.rel = "stylesheet";
    newLink.href = stylesheetPath; // Path to Arabic stylesheet
    head.appendChild(newLink);
  }
}
// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
  toggleArabicStylesheet(userPreferredLanguage);
});
