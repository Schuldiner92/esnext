console.warn('with() & at()');
const state = [
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

const index = 1;
const newName = 'Green Lantern';

// with() Regresa un nuevo arreglo pero con la referencia a todos sus elementos
const newState = state.with(index, {
    ...state.at(index),  
    name: newName,
});

state[0].name = 'Volcan Negro';

console.table(newState);
    
// at() permite obtener el elemento de una posición de una manera más rápida
console.log('Elemento: ', state.at(-1));