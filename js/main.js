// Gestion du menu burger
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('open');
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