"use strict";
(() => {
    let myCustomVariable = 'Raul';
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: [1, 2]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
//# sourceMappingURL=union-types.js.map