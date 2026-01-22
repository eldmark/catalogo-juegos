// creamos data type de juegos y un array con juegos de mesa

export type Game = {
  id: string;
  name: string;
  category: string;
  age: string;
  sponsored?: boolean;
};

export const games: Game[] = [
  {
    id: "catan",
    name: "Catan",
    category: "Estrategia",
    age: "10+",
    sponsored: true,
  },
  {
    id: "uno",
    name: "UNO",
    category: "Familiar",
    age: "6+",
  },
    {
    id: "monopoly",
    name: "Monopoly",
    category: "Familiar",
    age: "8+",
  },{
    id: "carcassonne",
    name: "Carcassonne",
    category: "Estrategia",
    age: "7+",
    sponsored: true,
  },
{
    id: "ticket-to-ride",
    name: "Ticket to Ride",
    category: "Estrategia",
    age: "8+",
},
{
    id: "splendor",
    name: "Splendor",
    category: "Estrategia",
    age: "10+",
    sponsored: true,
},
{
    id: "codenames",
    name: "Codenames",
    category: "Familiar",
    age: "14+",
},
{
    id: "cluedo",
    name: "Cluedo",
    category: "Misterio",
    age: "8+",
},
{
    id: "jenga",
    name: "Jenga",
    category: "Familiar",
    age: "6+",
},
{
    id: "twilight-imperium",
    name: "Twilight Imperium",
    category: "Estrategia",
    age: "14+",
},
{
    id: "gloomhaven",
    name: "Gloomhaven",
    category: "Aventura",
    age: "14+",
},
{
    id: "terraforming-mars",
    name: "Terraforming Mars",
    category: "Estrategia",
    age: "12+",
},
{
    id: "brass",
    name: "Brass: Lancashire",
    category: "Estrategia",
    age: "14+",
},
{
    id: "spirit-island",
    name: "Spirit Island",
    category: "Estrategia",
    age: "13+",
    sponsored: true,
},
];
