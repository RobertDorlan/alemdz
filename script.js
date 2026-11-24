// Menú desplegable del encabezado (funciona en móvil y escritorio).
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const isHome = document.body.classList.contains('home-page');
  const desktopNav = window.matchMedia('(min-width: 961px)');

  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.hidden = !open;
  }

  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!open);
  });

  if (isHome) {
    function syncHomeNavigation(event) {
      if (event.matches) {
        nav.hidden = false;
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        setOpen(false);
      }
    }

    syncHomeNavigation(desktopNav);
    desktopNav.addEventListener('change', syncHomeNavigation);
  }

  // Cerrar con la tecla Escape.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();

// Filtros progresivos para que la lista extensa de tarifas sea fácil de recorrer.
(function () {
  const grid = document.querySelector('.pricing__grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.price-card'));
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'essentials', label: 'Corte y secado' },
    { id: 'care', label: 'Cuidado y alisado' },
    { id: 'color', label: 'Color y técnicas' }
  ];

  cards.forEach(function (card) {
    const title = card.querySelector('h3')?.textContent || '';
    if (/Tinte|Highlight|Baby Lights|Balayage|Face Framing|Contorno|Color/i.test(title)) {
      card.dataset.category = 'color';
    } else if (/Hidratación|Botox|Alisado/i.test(title)) {
      card.dataset.category = 'care';
    } else {
      card.dataset.category = 'essentials';
    }
  });

  const controls = document.createElement('div');
  controls.className = 'pricing-filters';
  controls.setAttribute('aria-label', 'Filtrar tarifas por categoría');

  categories.forEach(function (category, index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = category.label;
    button.dataset.filter = category.id;
    button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');
    controls.append(button);
  });

  grid.before(controls);
  controls.addEventListener('click', function (event) {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const filter = button.dataset.filter;

    controls.querySelectorAll('button').forEach(function (item) {
      item.setAttribute('aria-pressed', String(item === button));
    });

    cards.forEach(function (card) {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
})();

// Accesibilidad y orientación: acceso directo al contenido y página activa.
(function () {
  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main-content';

  if (main && !document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Saltar al contenido principal';
    document.body.prepend(skipLink);
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .site-footer__nav a').forEach(function (link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const footer = document.querySelector('.site-footer__inner');
  if (footer && !footer.querySelector('.site-footer__details')) {
    const details = document.createElement('p');
    details.className = 'site-footer__details';
    details.innerHTML = 'Irlanda <span aria-hidden="true">·</span> <a href="https://wa.me/353873923809" target="_blank" rel="noopener noreferrer">Reservas por WhatsApp</a>';
    const copy = footer.querySelector('.site-footer__copy');
    footer.insertBefore(details, copy || null);
  }
})();
