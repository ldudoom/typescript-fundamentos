"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super fuerza', 'Volar', 'Rayos X', 'Super soplido'],
        getName() {
            return this.name;
        }
    };
    console.log(flash);
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super fuerza']
    };
})();
