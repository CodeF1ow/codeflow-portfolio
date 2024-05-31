import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/sobre-mi",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/servicios",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Proyectos Independientes",
        description: "Desarrollo interfaces de usuario modernas y responsivas, aplicando las mejores prácticas en diseño y desarrollo web. Colaboro con otros desarrolladores y participo en proyectos de código abierto para mejorar continuamente mis habilidades.",
        date: "Mayo 2024",
    },
    {
        id: 2,
        title: "Desarrollador de Servidores de Roleplay",
        subtitle: "Servidores Gaming",
        description: "Desarrollo y gestiono servidores de roleplay para juegos como FiveM, DayZ, Rust, Last Oasis y Minecraft. Crea experiencias inmersivas y personalizadas que fomentan la interacción y la diversión de los jugadores en entornos virtuales.",
        date: "Mayo 2021",
    },
    {
        id: 3,
        title: "Desarrollador de Bots para Discord",
        subtitle: "Proyectos Independientes",
        description: "Creo y gestiono bots de Discord utilizando Python y JavaScript. Diseño funcionalidades automatizadas que mejoran la experiencia del usuario en comunidades y servidores, ofreciendo soluciones innovadoras y eficientes para la moderación, el entretenimiento y la interacción.",
        date: "Agosto 2019",
    },
    {
        id: 4,
        title: "Prácticas de Grado Medio DAW",
        subtitle: "DYNOS INFORMÁTICA - CPU SOLUCIONES",
        description: "Realicé prácticas desarrollando y manteniendo aplicaciones web. Colaboré con un equipo profesional en la creación de soluciones informáticas, mejorando mis habilidades en diseño web, programación y resolución de problemas técnicos.",
        date: "Marzo 2018",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 7,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 135,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 88,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 6,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Desarrollo de Bots para Discord",
        description: "Creación y gestión de bots de Discord personalizados utilizando Python y JavaScript.",
    },
    {
        icon: <Pencil />,
        title: "Diseño de Interfaces Web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas.",
    },
    {
        icon: <Computer />,
        title: "Aplicaciones Web",
        description: "Desarrollo de aplicaciones web, utilizando las últimas tecnologías para garantizar un rendimiento óptimo.",
    },
    {
        icon: <Book />,
        title: "Servidores de Roleplay",
        description: "Configuración y optimización de servidores de roleplay para juegos como FiveM, DayZ, Rust, Last Oasis y Minecraft.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];