import p1 from "./images/p1_portfolio.webp";
import s1 from "./images/s1_portfolio.webp";
import p2 from "./images/p2_bookapp.webp";
import s2 from "./images/s2_bookapp.webp";
import p3 from "./images/p3_kasaapp.webp";
import s3 from "./images/s3_kasaapp.webp";
import p4 from "./images/p4_salouen.webp";
import s4 from "./images/s4_salouen.webp";

export default [
  {
    id: 4,
    title: "Salouen E-Commerce",
    description:
      "Salouen est un site d'e-commerce réalisé avec le stack MERN & TypeScript. Il s'agit d'une application full stack ou les utilisateurs authentifié peuvent acheter et commander des produits disponible sur le site. L'application possède aussi un tableau de bord specialement reservés aux administrateurs qui peuvent ajouter/modifer/supprimer des produits sur le site. Ils ont aussi la possibilité de gérer les commandes ainsi que les utilisateurs présent sur le site. Ce projet fut mon premier projet ou j'ai travaillé avec le TypeScript et il m'a permis de beaucoup mieux comprendre le fonctionnement de cette technologie et de développer de comptétences sur elle.",
    tech: [
      "MERN",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    img: [p4, s4],
    git: "https://github.com/FilipPFS/portfolio.git",
  },
  {
    id: 1,
    title: "Portfolio",
    description:
      "Le portfolio personnel qui répresente mon parcours en tant qu'un développeur Web. Le projet a été crée avec React et vous pouvez regarder entièrement le code disponible sur Github.",
    tech: ["React", "Redux Toolkit"],
    img: [p1, s1],
    git: "https://github.com/FilipPFS/portfolio.git",
  },
  {
    id: 2,
    title: "Mon vieux grimoire",
    description:
      "La création du BackEnd pour le projet Mon Vieux Grimoire, une application ou les utilisateurs pourront ajouter leur livres, et noter les livres des autres utilisateurs. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
    tech: ["Node.js", "Express", "MongoDB"],
    img: [p3, s3],
    git: "https://github.com/FilipPFS/book_projet.git",
  },
  {
    id: 3,
    title: "Kasa App",
    description:
      "Kasa est une application de location, ou les utilisateurs peuvent voir les différentes locations disponibles. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
    tech: ["React", "SASS"],
    img: [p2, s2],
    git: "https://github.com/FilipPFS/kasa_app.git",
  },
];
