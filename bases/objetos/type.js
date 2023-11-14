"use strict";
(() => {
    let Powers;
    (function (Powers) {
        Powers[Powers["superVelocidad"] = 1] = "superVelocidad";
        Powers[Powers["superFuerza"] = 2] = "superFuerza";
        Powers[Powers["viajarTiempo"] = 3] = "viajarTiempo";
        Powers[Powers["volar"] = 4] = "volar";
    })(Powers || (Powers = {}));
    ;
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: [Powers.superVelocidad, Powers.viajarTiempo]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [Powers.superVelocidad, Powers.superFuerza],
        getName() {
            return this.name;
        },
    };
})();
