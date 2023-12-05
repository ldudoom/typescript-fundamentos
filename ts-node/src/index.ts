//import { Hero as SuperHero, Hero2, Hero } from './classes/Hero';
import * as HeroClasses from "./classes/Hero";
// Cuando se realiza la exportacion por defecto ya no se deben colocar llaves
import powers from "./data/powers";

const Hero = 1234;

//const ironman = new SuperHero('Ironman', 1, 55);
const ironman = new HeroClasses.Hero( 'Ironman', 1, 55 );
console.log( ironman, HeroClasses.miNombre, HeroClasses.PI );

console.log( powers );

