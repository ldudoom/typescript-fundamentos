(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?:() => string
    };

    let myCustomVariable: (string | number | Hero) = 'Raul';

    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Bruce Wayne',
        age: 43,
        powers: [1,2]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);

})();