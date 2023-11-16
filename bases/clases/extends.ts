(() => {

    class Avenger {
        constructor(
            private name: string,
            private realName: string
        ) {
            console.log('Constructor Avenger llamado !!!');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            console.log('Constructor Xmen llamado !!!');
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );    
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();

})();