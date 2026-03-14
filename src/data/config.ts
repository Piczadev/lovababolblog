export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    coverImage: string;
    link: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "Orquestación de Agentes LLM en Producción",
        excerpt: "Descubre cómo arquitectar sistemas multi-agentes utilizando LLMs para resolver flujos empresariales complejos de forma segura y escalable.",
        date: "14 Feb, 2026",
        readTime: "8 min read",
        tags: ["AI", "Architecture", "Python"],
        coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop",
        link: "#",
    },
    {
        id: "2",
        title: "Smart Contracts Optimizados para Solana",
        excerpt: "Mejores prácticas para reducir el consumo computacional (CUs) y optimizar estados en programas construidos con Anchor y Rust.",
        date: "28 Ene, 2026",
        readTime: "12 min read",
        tags: ["Solana", "Smart Contracts", "Rust"],
        coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f4fc304?w=800&q=80&auto=format&fit=crop",
        link: "#",
    },
    {
        id: "3",
        title: "Por qué TON es el futuro de las Mini-Apps",
        excerpt: "Un análisis a la capacidad de distribución y adopción masiva que ofrece asimetrías mediante The Open Network y Telegram.",
        date: "10 Ene, 2026",
        readTime: "5 min read",
        tags: ["TON", "Web3", "Telegram"],
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop",
        link: "#",
    },
];

export interface Experience {
    id: string;
    role: string;
    company: string;
    date: string;
}

export const experienceData: Experience[] = [
    {
        id: "1",
        role: "Fundador, CEO & AI Automation Lead",
        company: "PizzaLabs",
        date: "Nov 2023 - Presente",
    },
    {
        id: "2",
        role: "Tech Content Creator & Producer",
        company: "Independiente",
        date: "Sep 2020 - Presente",
    },
    {
        id: "3",
        role: "Blockchain Developer & PM",
        company: "Varios",
        date: "Abr 2024 - Nov 2024",
    },
];
