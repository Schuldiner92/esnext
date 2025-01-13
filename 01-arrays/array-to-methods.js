console.warn('to');

const heroes = ['Superman', 'Batman', "Wonder Woman", "Flash"];
// const heroesCopy = heroes;


const sortedHeroes = heroes.toSorted();
const reversedHeroes = sortedHeroes.toReversed();
const deletedHeroes = heroes.toSpliced(0, 2, 'Aquaman');

console.table(heroes);
console.table(sortedHeroes);
console.table(reversedHeroes);
console.table(deletedHeroes);