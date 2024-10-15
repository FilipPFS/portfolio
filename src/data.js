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
import p6 from "./images/p6_trouverlouer.webp";
import s6 from "./images/s6_trouverlouer.webp";
import p7 from "./images/p7_fpcast.webp";
import s7 from "./images/s7_fpcast.webp";
import p8 from "./images/p8_chassedevs.webp";
import s8 from "./images/s8_chassedevs.webp";
import p9 from "./images/p9_evently.webp";
import s9 from "./images/s9_evently.webp";

export default [
  {
    id: 9,
    title: "Evently",
    description:
      "Evently est une application Full Stack créée avec Next.js. Sur cette plateforme les utilisateurs peuvent explorer les évènements disponibles et peuvent obtenir des tickets gratuits ou payants. De plus les utilisateurs ont la possibilité de créer leur propre évènement personnalisé, ajouter un titre, une description, une image, un lien, le prix si c’est un évènement payant etc.",
    tech: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "Stripe.js",
      "UploadThing",
    ],
    img: [p9, s9],
    link: "https://evently-omega.vercel.app",
    frontend: "https://github.com/FilipPFS/evently.git",
  },
  {
    id: 8,
    title: "Chasse au Devs",
    description:
      "Chasse au Devs est une application Full Stack créée avec Next.js et TypeScript. Il s'agit d'une plateforme de recherche d'emploi dans le domaine du développement web. Les candidats peuvent compléter leur profile et postuler aux différents offres présentes, directement sur la plateforme. Les recruteurs peuvent publier des annonces d'emploi, gérer leurs annonces, gérer les candidatures reçus.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
    img: [p8, s8],
    link: "https://chasse-au-devs.vercel.app/",
    frontend: "https://github.com/FilipPFS/chasse-au-devs",
  },
  {
    id: 7,
    title: "FP-Cast",
    description:
      "FP-Cast est une application Full Stack crée avec Next.js. Les utilisateurs peuvent écouter les podcasts sur cette plateforme mais ils ont aussi la possibilité de créer leur propre podcast, et tout ca grâce à l'IA. Ils peuvent choisir un titre, une description, et le contenu du podcast va être génerer avec une voix de l'IA à partir du texte qu'ils ont écrit. Ils peuvent aussi ajouter une image comme cover pour leur podcast, ou en demander l'IA de leur générer une.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Convex",
      "Clerk Auth",
      "OpenAI",
    ],
    img: [p7, s7],
    link: "https://fp-cast.vercel.app/",
    frontend: "https://github.com/FilipPFS/fp-cast.git",
  },
  {
    id: 6,
    title: "Trouver-Louer",
    description:
      "Trouver Louer est une application Full Stack créée avec Next.js. Les utilisateurs peuvent se connecter via Google. Ils ont ensuite la possibilité de voir toutes les locations disponibles, de rechercher des locations grâce à une barre de recherche et aux différentes catégories. De plus, ils peuvent ajouter leur propre location ainsi que 4 images pour chacune. Un système de messagerie est également présent sur l'application, permettant à l'utilisateur de contacter directement le propriétaire de la location.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    img: [p6, s6],
    frontend: "https://github.com/FilipPFS/trouver-louer",
  },
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
    link: "https://filip-petrovic.com/",
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
