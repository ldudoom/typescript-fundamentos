(() => {

    function callBatman(): void {
        console.log("I'm Batman..");
        return;
    }

    const callSuperman = (): void => console.log('Superman');

    const a = callBatman();
    console.log(a);
    console.log(callSuperman());

})();