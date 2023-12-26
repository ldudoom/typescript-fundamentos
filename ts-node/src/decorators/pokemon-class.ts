function printToConsole( constructor: Function ){
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
    if( print ){
        return printToConsole;
    } else {
        return () => {};
    }
}


const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}


// Decorador de metodo (vamos a validar que se reciba un ID correcto de un pokemon)
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        // console.log({target, propertyKey, descriptor});
        const originalMethod = descriptor.value;
        descriptor.value = ( id: number ) => {
            if(id < 1 || id > 800){
                return console.error('El ID del Pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod( id );
            }
        };
        
    }
}

// Decorador de propiedades (bloquear la propiedad publicApi para que nadie la pueda cambiar)
function ReadOnly( isWritable: boolean = true): Function {
    return function( target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get() {
                console.log( this );
                return 'Raul';
            },
            set(this, val) {
                // console.log(this, value);
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        }

        return descriptor;
    }
}




@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    
    // @ReadOnly( false )
    @ReadOnly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon ${id} almacenado en la BBDD`);
    }

}