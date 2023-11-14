"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo esta salvado!';
    //* let myFunction: (c:number, d: number) => number;
    //? let myFunction: (n:string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    //* myFunction = addNumbers;
    //* console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction('Raul'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
