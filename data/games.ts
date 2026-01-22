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
};

export const games: Game[] = [
    {
        id: "1",
        name: "Catan",
        category: "Estrategia",
        age: "10+",
        sponsored: true,
        description: "Un juego de estrategia donde los jugadores construyen asentamientos en una isla.",
        rules: ["Los jugadores toman turnos", "Construir con recursos", "Primer jugador a 10 puntos gana"],
    },
    {
        id: "2",
        name: "UNO",
        category: "Familiar",
        age: "6+",
        description: "Un juego de cartas rápido y emocionante donde debes ser el primero en deshacerte de todas tus cartas.",
        rules: ["Juega cartas del mismo color o número", "Di UNO cuando te queda una carta", "El primero sin cartas gana"],
    },
    {
        id: "3",
        name: "Monopoly",
        category: "Familiar",
        age: "8+",
        description: "El clásico juego de negociación inmobiliaria donde debes comprar propiedades y arruinar a tus rivales.",
        rules: ["Lanza los dados y muévete", "Compra propiedades", "Cobra renta a los rivales", "El último jugador solvente gana"],
    },
    {
        id: "4",
        name: "Carcassonne",
        category: "Estrategia",
        age: "7+",
        sponsored: true,
        description: "Un juego de construcción de mosaicos donde construyes un paisaje medieval.",
        rules: ["Coloca fichas de terreno", "Coloca tus seguidores estratégicamente", "Completa características para puntos"],
    },
    {
        id: "5",
        name: "Ticket to Ride",
        category: "Estrategia",
        age: "8+",
        description: "Construye rutas ferroviarias para conectar ciudades en un mapa.",
        rules: ["Recoge cartas de ruta", "Reclama rutas entre ciudades", "Completa tickets para puntos", "Mayor puntuación gana"],
    },
    {
        id: "6",
        name: "Splendor",
        category: "Estrategia",
        age: "10+",
        sponsored: true,
        description: "Un juego de desarrollo económico donde juegas como un mercader de gemas del Renacimiento.",
        rules: ["Compra desarrollo de gemas", "Atrae patrones nobles", "Acumula riqueza y prestigio"],
    },
    {
        id: "7",
        name: "Codenames",
        category: "Familiar",
        age: "14+",
        description: "Un juego de palabras de dos equipos donde das pistas para que tu equipo adivine palabras.",
        rules: ["El maestro da pistas de una palabra", "El equipo adivina palabras relacionadas", "Evita la palabra asesina"],
    },
    {
        id: "8",
        name: "Cluedo",
        category: "Misterio",
        age: "8+",
        description: "Resuelve el misterio deduciendo quién cometió el crimen, con qué arma y dónde.",
        rules: ["Muévete por la mansión", "Recoge pistas", "Haz acusaciones", "Resuelve el misterio"],
    },
    {
        id: "9",
        name: "Jenga",
        category: "Familiar",
        age: "6+",
        description: "Un juego de habilidad donde retiras bloques de una torre sin derrumbarla.",
        rules: ["Retira un bloque con una mano", "Colócalo en la cima", "La torre se derrumba, pierdes"],
    },
    {
        id: "10",
        name: "Twilight Imperium",
        category: "Estrategia",
        age: "14+",
        description: "Un épico juego de ciencia ficción de exploración galáctica y conquista.",
        rules: ["Controla sistemas estelares", "Ejecuta tácticas de combate", "Cumple objetivos políticos", "Sé el emperador"],
    },
    {
        id: "11",
        name: "Gloomhaven",
        category: "Aventura",
        age: "14+",
        description: "Un juego de campaña de aventura táctica donde dirigís un grupo de mercenarios.",
        rules: ["Explora mazmorras", "Combate táctico por turnos", "Mejora habilidades", "Completa la campaña"],
    },
    {
        id: "12",
        name: "Terraforming Mars",
        category: "Estrategia",
        age: "12+",
        description: "Compite para convertir Marte en un planeta habitable en este juego de gestión de recursos.",
        rules: ["Juega cartas de proyecto", "Invierte recursos", "Aumenta temperatura y oxígeno", "Mayor puntuación vence"],
    },
];
