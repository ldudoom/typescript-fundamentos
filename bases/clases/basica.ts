(() => {

    class Avenger {
        
        // private name: string = 'Scott Lang';
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge() {
            return Avenger.avgAge;
        }

        // constructor(name:string, team: string, realName?: string){
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        // Forma corta de inicializar el objeto
        constructor(
            private name: string, 
            private team: string, 
            avgAge: number,
            public realName?: string
        ) {
            Avenger.avgAge = avgAge;
        }

        public bio() {
            return `${this.name} (${this.team})`;
        }



    }

    const antman: Avenger = new Avenger('Antman', 'Team Capi', 35, 'Scott Lang');

    // console.log(antman);
    // console.log(Avenger.avgAge);

    // console.log(antman.bio());

})();