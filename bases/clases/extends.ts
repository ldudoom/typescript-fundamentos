(() => {

    class Avenger {
        constructor(
            protected name: string,
            protected realName: string
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

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if( name.length < 3) {
                throw new Error('El nombre debe tener al menos 3 caracteres');
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log( super.getFullName() );    
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    console.log(wolverine);
    console.log(wolverine.fullName);
    wolverine.fullName = 'Raul';
    console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen();

})();