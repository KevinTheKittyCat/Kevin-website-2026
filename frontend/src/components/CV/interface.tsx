

// Infobar items

export interface InfoBarItemData {
    title: string;
    sub?: Array<InfoBarItemData | string>;
    dropdown?: boolean;
    points?: InfoBarItemData[];
}

export const jsLibraries = {
    title: "Biblioteker",
    sub: [
        "Chakra UI", "Material-UI", "React-query",
        "React-Redux", "Tanstack Router", "React-router",
        "Capacitor", "React-pdf", "framer-motion",
        "Express", "ESLint", "Konva", "Three.js"
    ],
    dropdown: true
}

export const codingLanguages = {
    title: 'Koding',
    sub: [
        { title: 'Javascript/Ts', sub: ['React', jsLibraries], dropdown: true },
        { title: 'Python', sub: ['FastAPI'], dropdown: true },
        { title: 'Styling', sub: ["CSS/ SCSS", "Chakra UI", "Tailwind", "MUI", "Ionic"], dropdown: true },
        { title: 'Databaser', sub: ['PostgreSQL', 'Firebase', 'MongoDB', 'MySQL'], dropdown: true },
        { title: 'API-er', sub: ['Tripletex', 'Vipps', 'Firebase', "Brønnøysundregistrene", "Google Cloud (Maps, Places, Geocoding, calendar)", "Twitch", "ChatGPT", "Discord", "Nextcom"], dropdown: true },
    ],
    dropdown: true
}

export const languages = {
    title: 'Språk',
    points: [
        { title: 'Norsk', sub: ['Godt muntlig og skriftlig'] },
        { title: 'Engelsk', sub: ['Godt muntlig og skriftlig'] },
        codingLanguages,
        { title: 'Design', sub: ["Figma", "Illustrator", "Clip-studio-paint"] },
    ]
}

export const exampleData = {
    title: 'Språk',
    points: [
        { title: 'Norsk', sub: ['Godt muntlig og skriftlig'] },
        { title: 'Engelsk', sub: ['Godt muntlig og skriftlig'] },
        { title: 'Javascript, HTML, SCSS', sub: ['React', 'Ionic'], header: '2021' },
    ]
}




export const otherInterests = {
    title: 'Andre interesser',
    points: [
        { title: "Kode mentor", sub: ["Lærer bort koding til en gruppe på over 6stk"], header: "2023 - I dag" },
        { title: "Hobby koder", sub: ["Om jeg ikke er på jobb og koder så elsker jeg å sitte med det hjemme også."], header: "2021 - I dag" },
        { title: "Teknisk anlagt", sub: ["På toppen av det så bygger jeg pc-er og holder på med elektronikk, AI, og 3d printing."], header: "2016 - I dag" },
    ]
}

export const properties = {
    title: 'Egenskaper',
    points: [
        { title: "Løsningsorientert" },
        { title: "Kreativ" },
        { title: "Vennlig" },
        { title: "Sosial" },
        { title: "Lærevillig" },
    ]
}


// WORK Items
export const swiftner = {
    title: 'Swiftner',
    boldTitle: true,
    year: { from: '2025 (20. jan)', to: "2025 (23. august)" },
    role: 'Fullstack-utvikler',
    description: [
        "Swiftner HUD er ett AI coaching prosjekt som bruker mange forskjellige modeller for å opnå ett Live coaching verktøy, som hjelper brukeren i samtalen med live feedback, og etter ved å analysere dataen for å se hva en må bli bedre på. Samtidig som en coach får ett verktøy til å hjelpe dem bedre forstå brukeren.",
        "I dette prosjektet har jeg vært innom de fleste kode oppgaver, fra å lage widget-en, frontend, og backend. Som å sette opp Docker med Cloud Run, github workflows. Jeg har også hatt ansvar for kommunikasjon med kunder, for kvalitetssikring og funksjon utvikling.",
    ],
    image: "",
}


export const støttekontakt = {
    title: 'Barnevernet - Porsgrunn',
    boldTitle: false,
    year: { from: '2020', to: '2025' },
    role: 'Støttekontakt',
    description: [],
    image: "",
    video: "https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/projects%2Fmen-running-outside-on-sunny-day-2023-11-27-05-04-01-utc.mp4?alt=media&token=1a4801a4-f237-481f-8aa0-ee49348b154b",
}

export const norseeffect = {
    title: 'Norseeffect',
    boldTitle: true,
    year: { from: '2023', to: '2026' },
    role: 'Styret',
    description: ["Frontivia AS - Effektiv jobb AS - Reserver Meg AS"],
    image: "",
    video: "https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/projects%2Fnorseeffect.mp4?alt=media&token=e6d3a689-fc7f-4eac-9580-2b99e5c059d4",
}

export const frontivia = {
    title: 'Frontivia',
    boldTitle: false,
    year: { from: '2024', to: '2024' },
    role: 'Daglig leder - Fullstack-utvikler',
    description: ["Som en start-up tok jeg ansvar ovenfor mine kollegaer for opptrening av ny daglig leder. Systemer, API-er og design prosedyrer. "],
    image: "",
    video: "https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/projects%2FFrontivia%20Calculator.mov?alt=media&token=a732dd21-32be-44df-8641-852513bb1ce1",
}

export const effektivjobb = {
    title: 'Effektiv jobb AS',
    boldTitle: false,
    year: { from: '2023', to: '2025' },
    role: 'Fullstack-utvikler',
    description: [
        "Effektivjobb er en app som er utviklet fra ett behov i markedet. Alt fra API, funksjoner, backend, frontend har jeg vært med på som en full-stack utvikler. Designet og implementert i samarbeid med kunder og marked.",
        "Med flere ansatte så kommer mer ansvar som jeg også tok som daglig leder, disse oppgavene gikk ut på administrasjon for selgere, ansatte og styret. Møter, budsjett, prosjektledelse, protokoller og ledelse."
    ],
    image: "",
    video: "https://firebasestorage.googleapis.com/v0/b/fir-gruppen-app.appspot.com/o/V%C3%A5re%20filer%2FheroVideo.412059622a322f20bacb.mp4?alt=media&token=0211b219-1498-40a1-b42f-215c460f96f1",
}

export const freelance = {
    title: 'FREELANCE Arbeid',
    boldTitle: true,
    year: { from: '2019', to: '2023' },
    role: 'Fullstack-utvikler',
    description: [],
    image: "",
    video: "",
}

export const sideKoder = {
    title: 'Side-koder',
    boldTitle: false,
    year: { from: '2020', to: '2023' },
    role: 'Frontend-utvikler',
    description: [
        "Jeg Freelance Designet og Kodet Apper, Websider og Logoer. Erfaring når det gjelder Kundebehandling, tids-sensitive prosjekter og å holde produktivitet. Samabeid med kunde for å oppnå resultatet de vil ha. ",
        "Noen av språk jeg har brukt, og er veldig komfortabel med: React, SCSS(css), Javascript, HTML, Firebase, Firebase Functions, Ionic, Node, Konva. ",
        "Jeg har også kompetanse innen: Three.js, SQL, Discord.js, EmailJs, recharts, react-pdf, MongoDB. Jeg er også komfortabel med backend/server (Ubuntu / Windows), og hosting av websider."
    ],
    image: "",
    video: "",
}

export const forgevtt = {
    title: 'Forgevtt',
    boldTitle: false,
    year: { from: '2020', to: '2023' },
    role: 'UX/UI Designer - Canada',
    description: [
        "Jeg var en User Experience designer, og design leder i de fleste prosjektene i ForgeVTT. Oppgavene mine var å utføre design i Figma, som jeg etterpå får testet med kunder - og Guerrilla Testet offentlig."
    ],
    image: "",
    video: "",
}

export const relevantInfo = {
    title: 'Skolegang',
    boldTitle: true,
    year: { from: '2020', to: '2020' },
    role: '',
    description: [],
    image: "",
    video: "",
}


export const sgruppen = {
    title: 'S-gruppen Appen',
    boldTitle: false,
    year: { from: '2021', to: '2021' },
    role: 'Fullstack-utvikler',
    description: [
        "En app for å skrive rapporter.Den har signering, automatisasion av rapport-laging, pdf-export."
    ],
    image: "https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/projects%2FiPad%20Pro%2012.9_%20-%201.png?alt=media&token=16a2b309-eaf1-42d3-9a7b-1786875c865a",
    video: "",
}

export const uxNoroff = {
    title: 'UX Design',
    boldTitle: false,
    year: { from: '2022', to: '2023' },
    role: 'Noroff - Porsgrunn',
    description: [
        "UX Design høyskole, for å bedre komme inn i yrket og bruke fagspråk."
    ],
    image: "",
    video: "",
}

export const codeHS = {
    title: 'Javascript',
    boldTitle: false,
    year: { from: '2020', to: '2021' },
    role: 'CodeHS - Online',
    description: [
        "Læreplatform med lærer, av Microsoft, Javascript."
    ],
    image: "",
    video: "",
}

export const videregaende = {
    title: 'Videregående',
    boldTitle: false,
    year: { from: '2016', to: '2019' },
    role: 'Porsgrunn Videregående Skole',
    description: [
        "Studiespesialiserende, med fokus på filosofi, sosialkunnskap og engelsk."
    ],
    image: "",
    video: "",
}