(() => {

    let avenger: any;
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0) );
    // Podemos hacer un casting de la siguiente manera
    console.log( (avenger as string).charAt(0) );

    avenger = 150.2323456;
    //console.log( avenger.toFixed(2) );
    // Podemos hacer casting de esta otra manera
    console.log( <number>avenger.toFixed(2) );

    console.log( exists );
    console.log( power );

})();