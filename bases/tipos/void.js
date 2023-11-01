"use strict";
(() => {
    function callBatman() {
        console.log("I'm Batman..");
        return;
    }
    const callSuperman = () => console.log('Superman');
    const a = callBatman();
    console.log(a);
    console.log(callSuperman());
})();
