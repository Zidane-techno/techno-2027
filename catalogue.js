/* =====================================================================
   CATALOGUE DES SÉQUENCES  –  le seul fichier à modifier pour ajouter
   une séquence. Ouvrir avec le Bloc-notes (pas Word).

   Pour ajouter une séquence : copier un bloc { ... }, le coller dans la
   liste du bon niveau, puis changer le texte ENTRE les guillemets.
   Règles : guillemets droits "  ·  une virgule après chaque bloc }
   ===================================================================== */

const SITE = {
  titre: "Technologie & SNT",
  sousTitre: "Les séquences de la 5e à la seconde, à faire en classe ou à la maison.",
  etablissement: "",          // ex. "Collège Jean Moulin" (laisser "" pour ne rien afficher)
  professeur: ""              // ex. "M. Dupont"
};

/* statut : "disponible" (carte cliquable) ou "bientot" (carte grisée « Bientôt »)
   lien   : fichier du site (ex. "4e/station-velos.html")
            ou adresse complète (Genially, PDF sur Drive, Capytale…) */

const NIVEAUX = [
  {
    id: "5e", nom: "5e", discipline: "Technologie", couleur: "#3F7D20",
    sequences: [
      // { titre: "Titre de la séquence", theme: "Thème du programme", description: "Une phrase pour les élèves.", seances: 6, lien: "5e/ma-sequence.html", statut: "disponible" },
    ]
  },
  {
    id: "4e", nom: "4e", discipline: "Technologie", couleur: "#2E75B6",
    sequences: [
      { titre: "La station de vélos électriques",
        theme: "Analyse d’un OST · chaînes d’information et d’énergie",
        description: "Comment la station reconnaît l’usager, libère le vélo et le recharge.",
        seances: 7, lien: "4e/station-velos.html", statut: "disponible" },
    ]
  },
  {
    id: "3e", nom: "3e", discipline: "Technologie", couleur: "#C55A11",
    sequences: [
      { titre: "Les secrets de mBot",
        theme: "Séquence 2 · chaînes, programmation, matériaux",
        description: "Comment mBot transforme une information en mouvement, et avec quels matériaux il est fabriqué.",
        seances: 7, lien: "3e/mbot.html", statut: "disponible" },
    ]
  },
  {
    id: "snt", nom: "SNT", discipline: "Seconde", couleur: "#6B2FA0",
    sequences: [
      { titre: "Les réseaux sociaux",
        theme: "Thème 2 · graphes, petit monde, cyberviolence",
        description: "Comment les réseaux sociaux nous relient, et à quel prix pour nos données.",
        seances: 5, lien: "snt/reseaux-sociaux.html", statut: "disponible" },
    ]
  }
];
