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
(() => {
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${id} => ${this.name} - ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Raul',
        age: 42,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
    const client2 = {
        name: 'Fher',
        age: 30,
        address: {
            id: 120,
            zip: 'K2S U2A',
            city: 'Toronto'
        },
        getFullAddress(id) {
            return this.address.zip;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=myapp.js.map