// Récupère l'id dans l'URL : article.html?id=1
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

const loading = document.getElementById('article__loading');
const content = document.getElementById('article__content');

// Cherche l'article correspondant
const article = articles.find(a => a.id === id);

if (!article) {
  // Article introuvable → redirige vers le blog
  window.location.href = 'blog.html';
} else {

  // Injecte le contenu
  document.title = article.titre + ' — One Touch 360°';

  document.getElementById('article__badge').textContent  = article.badge;
  document.getElementById('article__title').textContent  = article.titre;
  document.getElementById('article__date').textContent   = article.date;
  document.getElementById('article__lecture').textContent = article.lecture + ' de lecture';
  document.getElementById('article__body').innerHTML     = article.contenu;

  // Couleur du hero selon l'article
  document.getElementById('article__hero').style.backgroundColor = article.imgCouleur;

  // Badge couleur selon catégorie
  const badge = document.getElementById('article__badge');
  const classes = {
    cas: 'badge--cas', conseil: 'badge--conseil',
    actu: 'badge--actu', agence: 'badge--agence'
  };
  badge.classList.add(classes[article.categorie] || 'badge--cas');

  // Articles liés (les 3 autres)
  const related = articles
    .filter(a => a.id !== id)
    .slice(0, 3);

  const relatedHTML = related.map(a => `
    <a href="article.html?id=${a.id}" class="article__related-link">
      <span class="blog__badge ${classes[a.categorie]}">${a.badge}</span>
      <p>${a.titre}</p>
    </a>
  `).join('');

  document.getElementById('article__related').innerHTML = relatedHTML;

  // Affiche l'article, cache le loader
  loading.style.display = 'none';
  content.style.display = 'block';
}