/* ============================================
   blog.js — génération dynamique depuis articles.js
   ============================================ */

const blogFeatured = document.getElementById('blogFeatured');
const blogGrid     = document.getElementById('blogGrid');
const blogEmpty    = document.getElementById('blog__empty');

const badgeClass = {
  cas:     'badge--cas',
  conseil: 'badge--conseil',
  actu:    'badge--actu',
  agence:  'badge--agence'
};

// ── Compteurs dans les filtres ──────────────────
function updateCounts(data) {
  document.getElementById('stat__total').textContent = data.length;
  document.getElementById('count__all').textContent  = data.length;

  ['cas', 'conseil', 'actu', 'agence'].forEach(cat => {
    const el = document.getElementById('count__' + cat);
    if (el) el.textContent = data.filter(a => a.categorie === cat).length;
  });
}

// ── Génère une grande carte (à la une) ─────────
function renderCardBig(article) {
  return `
    <article class="blog__card-big" data-category="${article.categorie}">
      <div class="blog__card-img" style="background-color:${article.imgCouleur}">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      </div>
      <div class="blog__card-body">
        <span class="blog__badge ${badgeClass[article.categorie]}">${article.badge}</span>
        <h3>${article.titre}</h3>
        <p>${article.extrait}</p>
        <div class="blog__meta">
          <span>${article.date}</span>
          <span class="blog__meta-dot"></span>
          <span>${article.lecture} de lecture</span>
          <span class="blog__meta-dot"></span>
          <a href="../pages/article.html?id=${article.id}" class="blog__read-link">Lire l'article →</a>
        </div>
      </div>
    </article>
  `;
}

// ── Génère une petite carte (grille) ───────────
function renderCardSm(article) {
  return `
    <article class="blog__card-sm" data-category="${article.categorie}">
      <div class="blog__card-img-sm" style="background-color:${article.imgCouleur}">
      </div>
      <div class="blog__card-body">
        <span class="blog__badge ${badgeClass[article.categorie]}">${article.badge}</span>
        <h3>${article.titre}</h3>
        <p>${article.extrait}</p>
        <div class="blog__meta">
          <span>${article.date}</span>
          <span class="blog__meta-dot"></span>
          <span>${article.lecture}</span>
          <span class="blog__meta-dot"></span>
          <a href="../pages/article.html?id=${article.id}" class="blog__read-link">Lire →</a>
        </div>
      </div>
    </article>
  `;
}

// ── Rendu initial ───────────────────────────────
function renderAll() {
  const featured = articles.slice(0, 2);
  const rest      = articles.slice(2);

  blogFeatured.innerHTML = featured.map(renderCardBig).join('');
  blogGrid.innerHTML     = rest.map(renderCardSm).join('');

  updateCounts(articles);
}

// ── Filtres ─────────────────────────────────────
function resetFilter() {
  document.querySelectorAll('.blog__filter').forEach(f => f.classList.remove('active'));
  document.querySelector('[data-filter="all"]').classList.add('active');
  applyFilter('all');
}

function applyFilter(filter) {
  const allCards = document.querySelectorAll('[data-category]');
  let visible = 0;

  allCards.forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  // Masquer/afficher les titres de section si besoin
  const featuredTitle = document.querySelector('.blog__section-title:first-of-type');
  const gridTitle     = document.getElementById('blog__grid-title');

  if (filter === 'all') {
    featuredTitle.style.display = '';
    gridTitle.style.display     = '';
  } else {
    featuredTitle.style.display = 'none';
    gridTitle.style.display     = 'none';
  }

  blogEmpty.style.display = visible === 0 ? 'flex' : 'none';
}

document.querySelectorAll('.blog__filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.blog__filter').forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.getAttribute('data-filter'));
  });
});

// ── Newsletter mini ─────────────────────────────
const blogNLForm = document.getElementById('blogNewsletterForm');
if (blogNLForm) {
  blogNLForm.addEventListener('submit', e => {
    e.preventDefault();
    blogNLForm.style.display = 'none';
    document.getElementById('blogNLSuccess').style.display = 'block';
  });
}

// ── Init ────────────────────────────────────────
renderAll();