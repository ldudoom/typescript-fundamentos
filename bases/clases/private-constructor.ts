(() => {

    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string) {}

        static callApocalipsis(): Apocalipsis {
            if( ! Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.instance;
        }

        changeName(name: string): void {
            this.name = name;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    apocalipsis1.changeName('Xavier');

    // const apocalipsis1 = new Apocalipsis('Yo soy apocalipsis ... soy el unico');
    // const apocalipsis2 = new Apocalipsis('Yo soy apocalipsis ... soy el unico');
    // const apocalipsis3 = new Apocalipsis('Yo soy apocalipsis ... soy el unico');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);



})();