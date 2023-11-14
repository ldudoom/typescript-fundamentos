(() => {

    enum Powers {
        superVelocidad = 1,
        superFuerza = 2,
        viajarTiempo = 3,
        volar = 4
    };

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?:() => string
    };

    let flash: Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: [Powers.superVelocidad, Powers.viajarTiempo]
    };

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [Powers.superVelocidad, Powers.superFuerza],
        getName() {
            return this.name;
        },
    };

})();