(() => {

    // const numbers = [1,2,3,4,5,'6',7,8,9,10];

    // El arreglo numbers toma como referencia el arreglo que le asignamos
    // por lo cual unicamente acepta valores de tipo string | number
    // por ésto, esto no sería permitido:
    // numbers.push(true);
    // a menos que inicialicemos el arreglo de la siguiente manera:

    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    // numbers.push('11');
    // numbers.push(12);
    // numbers.push(true);

    // console.log( numbers );

    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    villians.forEach( v => console.log( v.toUpperCase() ) );

})();