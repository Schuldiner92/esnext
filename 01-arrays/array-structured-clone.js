
const superHeroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
    },
    {
        id: 3,
        name: 'Flash',
    },
    {
        id: 4,
        name: 'Wonder Woman',
    },
];

// Facilita crear copias manipulables de arreglos evitando el "pasar por referencia"
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = 'Green Lantern';


console.table(superHeroes);
console.table(superHeroesCopy);