import p1 from "./images/p1_portfolio.webp";
import s1 from "./images/s1_portfolio.webp";
import p2 from "./images/p2_bookapp.webp";
import s2 from "./images/s2_bookapp.webp";
import p3 from "./images/p3_kasaapp.webp";
import s3 from "./images/s3_kasaapp.webp";
import p4 from "./images/p4_salouen.webp";
import s4 from "./images/s4_salouen.webp";
import p5 from "./images/p5_christianweb.webp";
import s5 from "./images/s5_christianweb.webp";

export default [
  {
    id: 5,
    title: "ChristianWeb",
    description:
      "ChristianWeb est un réseau social réalisé avec le stack MERN & TypeScript. Cette applications est reservé spécifiquement aux chrétiens qui peuvent partager du contenu en lien avec cette réligion. Il y'a de nombreuses fonctionalités intéressantes comme la création des posts, des évènements, la messagerie avec d'autres utilisateurs, la personnalisation du profil etc. Le projet a été crée uniquement pour la version desktop. Une application sera réalisé dans le futur avec React Native. Le code est disponible sur Github et vous pouvez retrouver les liens en dessous.",
    tech: ["MERN", "TypeScript"],
    img: [p5, s5],
    frontend: "https://github.com/FilipPFS/cw_frontend.git",
    backend: "https://github.com/FilipPFS/cw_backend.git",
  },
  {
    id: 4,
    title: "Salouen E-Commerce",
    description:
      "Salouen est un site d'e-commerce réalisé avec le stack MERN & TypeScript. Il s'agit d'une application full stack ou les utilisateurs authentifié peuvent acheter et commander des produits disponible sur le site. L'application possède aussi un tableau de bord specialement reservés aux administrateurs qui peuvent ajouter/modifer/supprimer des produits sur le site. Ils ont aussi la possibilité de gérer les commandes ainsi que les utilisateurs présent sur le site. Ce projet fut mon premier projet ou j'ai travaillé avec le TypeScript et il m'a permis de beaucoup mieux comprendre le fonctionnement de cette technologie et de développer de comptétences sur elle.",
    tech: ["MERN", "TypeScript", "Redux Toolkit", "Stripe"],
    img: [p4, s4],
    frontend: "https://github.com/FilipPFS/frontend.git",
    backend: "https://github.com/FilipPFS/salouen_backend.git",
  },
  {
    id: 1,
    title: "Portfolio",
    description:
      "Le portfolio personnel qui répresente mon parcours en tant qu'un développeur Web. Le projet a été crée avec React et vous pouvez regarder entièrement le code disponible sur Github.",
    tech: ["React", "Redux Toolkit"],
    img: [p1, s1],
    frontend: "https://github.com/FilipPFS/portfolio.git",
    backend: "",
  },
  {
    id: 2,
    title: "Mon vieux grimoire",
    description:
      "La création du BackEnd pour le projet Mon Vieux Grimoire, une application ou les utilisateurs pourront ajouter leur livres, et noter les livres des autres utilisateurs. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
    tech: ["Node.js", "Express", "MongoDB"],
    img: [p3, s3],
    frontend: "",
    backend: "https://github.com/FilipPFS/book_projet.git",
  },
  {
    id: 3,
    title: "Kasa App",
    description:
      "Kasa est une application de location, ou les utilisateurs peuvent voir les différentes locations disponibles. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
    tech: ["React", "SASS"],
    img: [p2, s2],
    frontend: "https://github.com/FilipPFS/kasa_app.git",
    backend: "",
  },
];
