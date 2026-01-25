// creamos data type de juegos y un array con juegos de mesa

export type Game = {
    id: string;
    name: string;
    category: string;
    age: string;
    sponsored?: boolean;
    description: string;
    rules: string[];
    image?: string;
    price: number;
    buyUrl: string;
    players: string;
    duration: string;

};

export const games: Game[] = [
    {
        id: "1",
        name: "Catan",
        category: "Estrategia",
        age: "10+",
        sponsored: true,
        description: "Un juego de estrategia donde los jugadores construyen asentamientos en una isla. Recolecta y comercia recursos para expandir tu territorio y ser el primero en alcanzar 10 puntos de victoria.",
        rules: ["Los jugadores toman turnos", "Construir con recursos", "Primer jugador a 10 puntos gana"],
        image: "https://magicboardgames.com.gt/wp-content/uploads/2025/12/1-21.png",
        price: 45.99,
        buyUrl: "https://www.amazon.com/Catan-Board-Game/dp/B07Q5JZJZJ",
        players: "5-6",
        duration: "45-60 minutos",
    },
    {
        id: "2",
        name: "UNO",
        category: "Familiar",
        age: "6+",
        description: "Un juego de cartas rápido y emocionante donde debes ser el primero en deshacerte de todas tus cartas. Usa cartas especiales para cambiar el juego y desafiar a tus oponentes.",
        rules: ["Juega cartas del mismo color o número", "Di UNO cuando te queda una carta", "El primero sin cartas gana"],
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/470220/b8741c3f32ce4560f33d6a7af256ec8c9828f285/header.jpg?t=1765229632",
        price: 12.99,
        buyUrl: "www.google.com",
        players: "2-10",
        duration: "15-30 minutos"
    },
    {
        id: "3",
        name: "Monopoly",
        category: "Familiar",
        age: "8+",
        description: "El clásico juego de negociación inmobiliaria donde debes comprar propiedades y arruinar a tus rivales.",
        rules: ["Lanza los dados y muévete", "Compra propiedades", "Cobra renta a los rivales", "El último jugador solvente gana"],
        image: "https://m.media-amazon.com/images/I/71Tks9Tf7aL._AC_SL1000_.jpg",
        price: 29.99,
        buyUrl: "www.google.com",
        players: "2-8",
        duration: "45-60 minutos"
    },
    {
        id: "4",
        name: "Carcassonne",
        category: "Estrategia",
        age: "7+",
        sponsored: true,
        description: "Un juego de construcción de mosaicos donde construyes un paisaje medieval.",
        rules: ["Coloca fichas de terreno", "Coloca tus seguidores estratégicamente", "Completa características para puntos"],
        image: "https://cdn1.epicgames.com/0aaf0617ee0d47df87c0dc93509159dd/offer/Videos%20Thumbnail-1920x1080.jpg-1920x1080-baaafe9bc40ed03a14e174bb99f2ce44-1920x1080-baaafe9bc40ed03a14e174bb99f2ce44.jpg",
        price: 35.50,
        buyUrl: "www.google.com",
        players: "2-5",
        duration: "30-45 minutos"
    },
    {
        id: "5",
        name: "Ticket to Ride",
        category: "Estrategia",
        age: "8+",
        description: "Construye rutas ferroviarias para conectar ciudades en un mapa.",
        rules: ["Recoge cartas de ruta", "Reclama rutas entre ciudades", "Completa tickets para puntos", "Mayor puntuación gana"],
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202412/0511/cd4d2a576684b71a71182c18c6ca3e0813a63f0da5f53b87.jpg",
        buyUrl: "www.google.com",
        players: "2-5",
        duration: "30-45 minutos"
    },
    {
        id: "6",
        name: "Splendor",
        category: "Estrategia",
        age: "10+",
        sponsored: true,
        description: "Un juego de desarrollo económico donde juegas como un mercader de gemas del Renacimiento.",
        rules: ["Compra desarrollo de gemas", "Atrae patrones nobles", "Acumula riqueza y prestigio"],
        image: "https://www.thegamesteward.com/cdn/shop/products/splendor-retail-edition-space-cowboys-34736534978712_600x.jpg?v=1634381140",
        price: 42.99,
        buyUrl: "www.google.com",
        players: "2-4",
        duration: "30-45 minutos"
    },
    {
        id: "7",
        name: "Codenames",
        category: "Familiar",
        age: "14+",
        description: "Un juego de palabras de dos equipos donde das pistas para que tu equipo adivine palabras.",
        rules: ["El maestro da pistas de una palabra", "El equipo adivina palabras relacionadas", "Evita la palabra asesina"],
        price: 19.99,
        buyUrl: "www.google.com",
        players: "2-10",
        duration: "15-30 minutos"
    },
    {
        id: "8",
        name: "Cluedo",
        category: "Misterio",
        age: "8+",
        description: "Resuelve el misterio deduciendo quién cometió el crimen, con qué arma y dónde.",
        rules: ["Muévete por la mansión", "Recoge pistas", "Haz acusaciones", "Resuelve el misterio"],
        price: 24.99,
        buyUrl: "www.google.com",
        players: "2-6",
        duration: "30-45 minutos"
    },
    {
        id: "9",
        name: "Jenga",
        category: "Familiar",
        age: "6+",
        description: "Un juego de habilidad donde retiras bloques de una torre sin derrumbarla.",
        rules: ["Retira un bloque con una mano", "Colócalo en la cima", "La torre se derrumba, pierdes"],
        price: 14.99,
        buyUrl: "www.google.com",
        players: "2-8",
        duration: "15-30 minutos"
    },
    {
        id: "10",
        name: "Twilight Imperium",
        category: "Estrategia",
        age: "14+",
        description: "Un épico juego de ciencia ficción de exploración galáctica y conquista.",
        rules: ["Controla sistemas estelares", "Ejecuta tácticas de combate", "Cumple objetivos políticos", "Sé el emperador"],
        price: 69.99,
        buyUrl: "www.google.com",
        players: "2-6",
        duration: "45-60 minutos"
    },
    {
        id: "11",
        name: "Gloomhaven",
        category: "Aventura",
        age: "14+",
        description: "Un juego de campaña de aventura táctica donde dirigís un grupo de mercenarios.",
        rules: ["Explora mazmorras", "Combate táctico por turnos", "Mejora habilidades", "Completa la campaña"],
        price: 79.99,
        buyUrl: "www.google.com",
        players: "2-5",
        duration: "45-60 minutos"
    },
    {
        id: "12",
        name: "Terraforming Mars",
        category: "Estrategia",
        age: "12+",
        description: "Compite para convertir Marte en un planeta habitable en este juego de gestión de recursos.",
        rules: ["Juega cartas de proyecto", "Invierte recursos", "Aumenta temperatura y oxígeno", "Mayor puntuación vence"],
        price: 54.99,
        buyUrl: "www.google.com",
        players: "2-4",
        duration: "30-45 minutos"
    },
];
