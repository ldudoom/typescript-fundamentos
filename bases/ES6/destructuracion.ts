(() => {

    // Destructuracion de Objetos
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Betany',
        activo: true,
        poder: 1500.1234567
    }

    // const {poder, vision} = avengers;
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( {ironman, ...resto}:Avengers ) => {
        console.log( ironman, resto );
    }

    //printAvenger(avengers);


    // Destructuracion de Arreglos
    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];
    const [capi,ironman,] = avengersArr;
    //console.log({ironman, capi});

})();