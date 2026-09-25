// Toggle de idioma ES/EN. El español es el idioma base (texto en el HTML);
// aquí solo se definen las traducciones al inglés. La preferencia se guarda
// en localStorage y se aplica en todas las páginas.
(function () {
  var STORAGE_KEY = "byalemdz-lang";

  var en = {
    // Encabezado / navegación (común a todas las páginas)
    "chrome.menu": "Open menu",
    "chrome.home_aria": "BYALEMDZ — Go to homepage",
    "chrome.back": "← Back to home",
    "nav.mihistoria": "My story",
    "nav.journalist": "Journalist & Photo",
    "nav.belleza": "Beauty & Tips",
    "nav.tricologia": "Trichology",
    "nav.hair": "Hair & Services",
    "nav.headspa": "Head Spa",

    // Portada
    "home.hero_aria": "BYALEMDZ studio photo",
    "home.hero_alt":
      "BYALEMDZ studio: professional hair salon with vanity, round mirror, elegant chair and golden details, bright and editorial.",
    "home.explore": "Explore my world",
    "home.about_eyebrow": "The person behind BYALEMDZ",
    "home.about_title": "About me",
    "home.about_lead":
      "María Alejandra Mendoza — Professional Stylist, Trichologist and Bachelor in Social Communication.",
    "home.about_link": "Read my story →",

    // Encabezados de páginas interiores
    "mihist.eyebrow": "About me",
    "mihist.title": "My story",
    "jour.eyebrow": "Journalism & photography",
    "jour.title": "Journalist & Photo",
    "bell.eyebrow": "Blog",
    "bell.title": "Beauty tips",
    "tric.eyebrow": "Hair health",
    "tric.title": "Trichology",
    "serv.eyebrow": "Hair & Services",
    "serv.title": "Services",
    "serv.cta": "Book an appointment",
    "spa.eyebrow": "Care & wellbeing",
    "spa.title": "Head Spa",
    "spa.cta": "Book via Instagram",
    "book.eyebrow": "Bookings",
    "book.title": "Bookings",
    "book.cta": "Book via Instagram"
  };

  var current = localStorage.getItem(STORAGE_KEY) || "es";

  function translateNode(node) {
    var key = node.getAttribute("data-i18n");
    if (!node.hasAttribute("data-i18n-es")) {
      node.setAttribute("data-i18n-es", node.textContent);
    }
    if (current === "en" && en[key] != null) {
      node.textContent = en[key];
    } else {
      node.textContent = node.getAttribute("data-i18n-es");
    }
  }

  function translateAttrs(node) {
    var spec = node.getAttribute("data-i18n-attr");
    spec.split(";").forEach(function (pair) {
      var idx = pair.indexOf(":");
      if (idx < 0) return;
      var attr = pair.slice(0, idx).trim();
      var key = pair.slice(idx + 1).trim();
      var cache = "data-i18n-es-" + attr;
      if (!node.hasAttribute(cache)) {
        node.setAttribute(cache, node.getAttribute(attr) || "");
      }
      if (current === "en" && en[key] != null) {
        node.setAttribute(attr, en[key]);
      } else {
        node.setAttribute(attr, node.getAttribute(cache));
      }
    });
  }

  function apply() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(translateNode);
    document.querySelectorAll("[data-i18n-attr]").forEach(translateAttrs);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.textContent = current === "es" ? "EN" : "ES";
      btn.setAttribute(
        "aria-label",
        current === "es" ? "Switch to English" : "Cambiar a español"
      );
    });
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lang-toggle]");
    if (!t) return;
    e.preventDefault();
    current = current === "es" ? "en" : "es";
    localStorage.setItem(STORAGE_KEY, current);
    apply();
  });

  apply();
})();
