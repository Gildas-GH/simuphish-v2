import { VNode } from "preact";
import WelcomeMail from "./components/WelcomeMail";
import ReunionHebdo from "./components/ReunionHebdo";
import Antai from "./components/Antai";

export interface Mail {
    name: string,
    email: string,
    toName: string,
    toMail: string,
    subject: string,
    date: string,
    teaser: string,
    phishing: boolean,
    done?: boolean,
    Component?: VNode<any>
}

const mails: Mail[] = [
    {
        name: "Kernaval",
        email: "rh@kernaval.com",
        toName: "Victor Marchand",
        toMail: "victor.marchand@kernaval.com",
        subject: "Bienvenue à Kernaval",
        date: "09:34 AM",
        phishing: false,
        Component: <WelcomeMail />,
        teaser:
            "Bienvenue Victor, découvrez votre nouvel environnement professionnel dans le port de Kernaval.",
    },
    {
        name: "Alice Dumas",
        email: "alice.dumas@kernaval.com",
        toName: "Victor Marchand",
        toMail: "victor.marchand@kernaval.com",
        subject: "Réunion hebdomadaire",
        date: "Yesterday",
        phishing: false,
        Component: <ReunionHebdo />,
        teaser:
            "Veuillez noter la date de la prochaine réunion hebdomadaire : Elle aura lieu ce jeudi à 15h30, en présence de David.",
    },
    {
        name: "ANTAl",
        email: "ne_pas_repondre@antaj-contravention-gouv.fr",
        toName: "Victor Marchand",
        toMail: "victor.marchand@kernaval.com",
        subject: "(1) Nouveau message important de l'ANTAl",
        date: "2 days ago",
        phishing: true,
        Component: <Antai />,
        teaser:
            "Vous avez une (1) nouvelle alerte de la part de l'Agence Nationale de Traitement Automatisé des Insfractions.",
    },
    {
        name: "Emilie Davis",
        email: "emilie.davis@kernaval.com",
        toName: "Victor Marchand",
        toMail: "victor.marchand@kernaval.com",
        subject: "Re: Question à propos du budget",
        date: "2 days ago",
        phishing: false,
        teaser:
            "J'ai passé en revue l'excel que tu m'as envoyé il y a quelques jours pour le budget. Peut-on s'appeler rapidement pour faire quelques ajustements ?"
    },
];

export default mails;