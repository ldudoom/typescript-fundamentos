// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface GothamCity {
  (ciudadanos: string[]): number;
}

const ciudadGotica: GothamCity = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: boolean;
  imprimirBio(): void;
}

class Persona implements Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: boolean;
  imprimirBio(): void {
    throw new Error("Method not implemented.");
  }
}