import p1 from "./images/p1_portfolio.webp";
import p2 from "./images/p2_bookapp.webp";
import p3 from "./images/p3_kasaapp.webp";

export default [
    {
        id: 1,
        title: "Portfolio",
        description: "Le portfolio personnel qui répresente mon parcours en tant qu'un développeur Web. Le projet a été crée avec React et vous pouvez regarder entièrement le code disponible sur Github.",
        tech: [
            "React"
        ],
        img: p1,
        git: "https://github.com/FilipPFS/portfolio.git"
    },
    {
        id: 2,
        title: "Mon vieux grimoire",
        description: "La création du BackEnd pour le projet Mon Vieux Grimoire, une application ou les utilisateurs pourront ajouter leur livres, et noter les livres des autres utilisateurs. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
        tech: [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        img: p3,
        git: "https://github.com/FilipPFS/book_projet.git"
    },
    {
        id: 3,
        title: "Kasa App",
        description: "Kasa est une application de location, ou les utilisateurs peuvent voir les différentes locations disponibles. Ce projet répresnte un projet du parcours Développeur Web de la formation OpenClassroom et le code est disponible sur Github.",
        tech: [
            "React",
            "SASS"
        ],
        img: p2,
        git: "https://github.com/FilipPFS/kasa_app.git"
    },
]