/* ============================================
   NAVBAR — Scroll + Burger + Lien actif
   ============================================ */

const header  = document.querySelector('.header');
const burger  = document.getElementById('burger');
const nav     = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav .lists_items a');

// ── 1. Ajout du bouton CTA dans la nav ──────
const ctaLink = document.createElement('a');
ctaLink.href      = '#contact';
ctaLink.className = 'nav__cta';
ctaLink.textContent = 'Contact';
document.querySelector('.nav .lists_items').appendChild(
  Object.assign(document.createElement('li'), {
    className: 'item',
    innerHTML: '<a href="#contact" class="nav__cta">Contact</a>'
  })
);

// ── 2. Scroll — transparent → scrolled ──────
function handleScroll() {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // applique l'état au chargement

// ── 3. Burger menu ───────────────────────────
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('open');

  // Bloque le scroll du body quand le menu est ouvert
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// ── 4. Ferme le menu au clic sur un lien ────
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── 5. Lien actif selon la section visible ──
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id ||
            link.getAttribute('href') === './' + id + '.html') {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ── 6. Ferme le menu si on clique en dehors ─
document.addEventListener('click', (e) => {
  if (nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !burger.contains(e.target)) {
    burger.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ── 7. Ferme le menu si resize → desktop ────
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    burger.classList.remove('open');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  }
});
// Gestion du lien actif
const links = document.querySelectorAll('.nav .lists_items a');

links.forEach(link => {
  link.addEventListener('click', function() {
    // Retirer active de tous les liens
    links.forEach(l => l.classList.remove('active'));
    // Ajouter active au lien cliqué
    this.classList.add('active');
  });
});

// BONUS : scroll spy (mettre actif selon la section visible)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let scrollPos = window.scrollY + 100; // marge pour header fixe

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Newsletter form
const newsletterForm = document.getElementById('newsletterForm');
const nlSuccess = document.getElementById('nlSuccess');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('nlName').value;
    const email = document.getElementById('nlEmail').value;

    if (name && email) {
      // Ici tu brancheras ton service email (Mailchimp, Brevo, etc.)
      newsletterForm.querySelector('.newsletter__fields').style.display = 'none';
      newsletterForm.querySelector('.newsletter__privacy').style.display = 'none';
      nlSuccess.style.display = 'flex';
    }
  });
}