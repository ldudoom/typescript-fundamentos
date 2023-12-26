import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

charmander.publicApi = 'https://buhoo.ec';
console.log(charmander);

// charmander.savePokemonToDB(500);