const articles = [
  {
    id: 1,
    titre: "Refonte complète du site web d'une boutique de Pointe-Noire",
    categorie: "cas",
    badge: "Étude de cas",
    date: "12 avril 2026",
    lecture: "6 min",
    extrait: "De zéro à en ligne en 5 jours — design moderne, mobile-first et optimisé pour Google.",
    image: "./images/blog/article-1.jpg",
    imgCouleur: "#1e293b",
    contenu: `
      <h2>Le contexte</h2>
      <p>Une boutique de vêtements basée à Pointe-Noire nous a contactés en mars 2026 
      avec un problème simple : elle n'existait pas en ligne. Pas de site, pas de page 
      Facebook professionnelle, rien. Pourtant, ses concurrents commençaient à attirer 
      des clients via Instagram.</p>

      <h2>Ce que le client nous a demandé</h2>
      <p>Créer un site vitrine moderne, rapide sur mobile, et qui reflète l'identité 
      visuelle de la boutique. Budget serré, délai de 5 jours.</p>

      <h2>Notre approche</h2>
      <p>On a commencé par un audit rapide de ses concurrents locaux et une séance 
      de 2h pour définir les couleurs, le ton et les pages nécessaires. Ensuite :</p>
      <ul>
        <li>Jour 1-2 : maquette et validation client</li>
        <li>Jour 3-4 : développement et intégration des photos</li>
        <li>Jour 5 : tests, mise en ligne et formation du client</li>
      </ul>

      <h2>Le résultat</h2>
      <p>Site livré en 5 jours, 100% responsive, avec un formulaire de contact 
      et une galerie produits. Le client a reçu ses 3 premières demandes en ligne 
      dans la semaine qui a suivi le lancement.</p>

      <blockquote>
        "On ne pensait pas qu'un site pouvait changer autant de choses aussi vite. 
        Merci à l'équipe One Touch 360°."
        <cite>— Propriétaire de la boutique</cite>
      </blockquote>
    `
  },
  {
    id: 2,
    titre: "Gestion des réseaux sociaux d'un restaurant local : +200% d'abonnés",
    categorie: "cas",
    badge: "Étude de cas",
    date: "3 avril 2026",
    lecture: "5 min",
    extrait: "Comment une stratégie contenu sur 2 mois a transformé la visibilité d'un restaurant.",
    image: "./images/blog/article-2.jpg",
    imgCouleur: "#0f2027",
    contenu: `
      <h2>Le contexte</h2>
      <p>Un restaurant de Pointe-Noire avec une excellente cuisine mais une présence 
      digitale quasi inexistante. 120 abonnés sur Facebook, aucune publication depuis 
      3 mois.</p>

      <h2>Ce que le client nous a demandé</h2>
      <p>Reprendre entièrement la gestion de leurs réseaux sociaux et attirer 
      plus de clients en salle.</p>

      <h2>Notre approche</h2>
      <p>On a mis en place une stratégie contenu sur 2 mois : 3 publications par 
      semaine (photos des plats, coulisses de la cuisine, promotions du week-end), 
      une identité visuelle cohérente et des stories quotidiennes.</p>

      <h2>Le résultat</h2>
      <p>En 2 mois : 120 → 360 abonnés Facebook (+200%), portée multipliée par 8, 
      et le restaurant nous a confirmé une augmentation visible de la fréquentation 
      le week-end.</p>
    `
  },
  {
    id: 3,
    titre: "5 erreurs à éviter sur votre page Facebook professionnelle",
    categorie: "conseil",
    badge: "Conseils & Tutos",
    date: "28 mars 2026",
    lecture: "4 min",
    extrait: "Les fautes les plus courantes qui font fuir vos clients sur Facebook.",
    image: "./images/blog/article-3.jpg",
    imgCouleur: "#fef3c7",
    contenu: `
      <h2>Introduction</h2>
      <p>Beaucoup d'entreprises ont une page Facebook mais peu en tirent vraiment 
      profit. Voici les 5 erreurs qu'on voit le plus souvent chez nos clients 
      avant qu'on intervienne.</p>

      <h2>Erreur 1 — Une photo de profil floue ou mal cadrée</h2>
      <p>C'est la première chose que voit un visiteur. Un logo pixelisé ou coupé 
      donne une impression d'amateurisme. Utilisez un carré de 400×400px minimum.</p>

      <h2>Erreur 2 — Ne pas renseigner les infos de contact</h2>
      <p>Téléphone, adresse, horaires, site web — tout doit être rempli. Un client 
      qui ne trouve pas comment vous contacter part chez le concurrent.</p>

      <h2>Erreur 3 — Publier trop rarement ou trop souvent</h2>
      <p>Le rythme idéal pour une PME locale : 3 à 5 publications par semaine. 
      Une par mois c'est trop peu, dix par jour c'est trop.</p>

      <h2>Erreur 4 — Ne jamais répondre aux commentaires</h2>
      <p>L'algorithme Facebook favorise les pages actives. Répondez à chaque 
      commentaire, même court.</p>

      <h2>Erreur 5 — Publier sans appel à l'action</h2>
      <p>Chaque post doit guider le lecteur : "Appelez-nous", "Réservez maintenant", 
      "Visitez notre site". Sans ça, votre contenu n'amène aucun résultat concret.</p>
    `
  },
  {
    id: 4,
    titre: "L'intelligence artificielle pour les petites entreprises en Afrique centrale",
    categorie: "actu",
    badge: "Actu Tech",
    date: "20 mars 2026",
    lecture: "5 min",
    extrait: "Quels outils d'intelligence artificielle adopter concrètement en 2026 ?",
    image: "./images/blog/article-4.jpg",
    imgCouleur: "#ede9fe",
    contenu: `
      <h2>L'IA, c'est pour tout le monde maintenant</h2>
      <p>On entend beaucoup parler d'intelligence artificielle, mais concrètement, 
      qu'est-ce que ça change pour une petite entreprise à Pointe-Noire ou Brazzaville ?</p>

      <h2>Les outils accessibles dès aujourd'hui</h2>
      <p><strong>ChatGPT / Claude</strong> — pour rédiger vos publications, répondre 
      aux emails clients, créer du contenu marketing rapidement.</p>
      <p><strong>Canva AI</strong> — pour générer des visuels professionnels sans 
      être graphiste.</p>
      <p><strong>Google Gemini</strong> — intégré à Gmail et Docs, utile pour 
      résumer des documents et rédiger des devis.</p>

      <h2>Ce que l'IA ne remplace pas</h2>
      <p>La relation humaine, la connaissance du contexte local, et la stratégie. 
      L'IA est un outil, pas un remplaçant. Chez One Touch 360°, on l'utilise 
      pour aller plus vite, pas pour travailler moins bien.</p>
    `
  },
  {
    id: 5,
    titre: "One Touch 360° fête ses 3 ans à Pointe-Noire",
    categorie: "agence",
    badge: "Vie de l'agence",
    date: "15 mars 2026",
    lecture: "3 min",
    extrait: "Retour sur 3 ans de projets, de rencontres et de croissance digitale au Congo.",
    image: "./images/blog/article-5.jpg",
    imgCouleur: "#fce7f3",
    contenu: `
      <h2>3 ans déjà</h2>
      <p>En mars 2023, One Touch 360° ouvrait ses portes à Pointe-Noire avec 
      une idée simple : accompagner les entreprises congolaises dans leur 
      transformation digitale, concrètement et sans jargon.</p>

      <h2>Ce qu'on a accompli</h2>
      <p>Depuis, c'est plus de 50 clients accompagnés, des dizaines de sites 
      web lancés, des centaines de posts publiés et des formations dispensées 
      à des entrepreneurs locaux.</p>

      <h2>La suite</h2>
      <p>On prépare de nouveaux services pour 2026 : formation intensive en 
      marketing digital, accompagnement e-commerce et solutions cloud pour PME. 
      Merci à tous nos clients et partenaires qui nous font confiance.</p>
    `
  }
];