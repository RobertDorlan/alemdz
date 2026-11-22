// Encabezado editorial compartido y navegación responsive.
(function () {
  const header = document.querySelector('.site-header');
  const inner = header && header.querySelector('.site-header__inner');
  const nav = document.getElementById('site-nav');

  if (!header || !inner || !nav) return;

  // Reorganiza el encabezado existente sin duplicar el contenido de las páginas.
  const left = inner.querySelector('.site-header__left');
  const center = inner.querySelector('.site-header__center');
  const right = inner.querySelector('.site-header__right');
  const brand = inner.querySelector('.brand');
  const toggle = inner.querySelector('.menu-toggle');
  const langToggle = inner.querySelector('[data-lang-toggle]');
  const socialLinks = Array.from(inner.querySelectorAll('.social-link'));

  if (!header.querySelector('.announcement-bar')) {
    const announcement = document.createElement('div');
    announcement.className = 'announcement-bar';

    const announcementInner = document.createElement('div');
    announcementInner.className = 'announcement-bar__inner';

    const message = document.createElement('p');
    message.className = 'announcement-bar__message';
    message.dataset.i18n = 'footer.tagline';
    message.textContent = 'Hair Professional · Tricología · Head Spa';

    const tools = document.createElement('div');
    tools.className = 'announcement-bar__tools';

    const social = document.createElement('div');
    social.className = 'announcement-bar__social';
    social.setAttribute('aria-label', 'Redes sociales');
    socialLinks.forEach(function (link) {
      const icon = link.querySelector('svg');
      if (icon) {
        icon.setAttribute('width', '17');
        icon.setAttribute('height', '17');
      }
      social.appendChild(link);
    });

    const topBooking = document.createElement('a');
    topBooking.className = 'announcement-bar__booking';
    topBooking.href = 'bookings.html';
    topBooking.innerHTML = '<span data-i18n="home.intro_cta">Reservar cita</span><span aria-hidden="true">→</span>';

    tools.appendChild(social);
    if (langToggle) tools.appendChild(langToggle);
    tools.appendChild(topBooking);
    announcementInner.appendChild(message);
    announcementInner.appendChild(tools);
    announcement.appendChild(announcementInner);
    header.insertBefore(announcement, inner);
  }

  if (brand && !brand.querySelector('.brand__name')) {
    const name = document.createElement('span');
    name.className = 'brand__name';
    name.textContent = 'BYALEMDZ';

    const tagline = document.createElement('span');
    tagline.className = 'brand__tagline';
    tagline.textContent = 'Hair Professional';

    brand.textContent = '';
    brand.appendChild(name);
    brand.appendChild(tagline);
  }

  nav.hidden = false;
  if (right && nav.parentElement !== inner) inner.insertBefore(nav, right);

  if (right && !right.querySelector('.header-booking')) {
    const booking = document.createElement('a');
    booking.className = 'header-booking';
    booking.href = 'bookings.html';
    booking.dataset.i18n = 'home.intro_cta';
    booking.textContent = 'Reservar cita';
    right.insertBefore(booking, right.firstChild);
  }

  if (right && toggle && toggle.parentElement !== right) right.appendChild(toggle);
  if (left) left.remove();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('a[href]').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
  });

  if (!toggle) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('site-nav--open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) setOpen(false);
  });
})();
