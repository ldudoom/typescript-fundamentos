"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const error2 = (message) => {
        if (!message) {
            throw new Error(message);
        }
        return 1;
    };
    error('Funcion never');
    console.log('Hello world');
})();
