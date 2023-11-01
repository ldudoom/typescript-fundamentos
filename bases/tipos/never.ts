(() => {


    const error = (message: string): never => {
        throw new Error(message)
    }

    const error2 = (message: string): (never|number) => {
        if( ! message ){
            throw new Error(message);
        }
        return 1;
    }

    error('Funcion never');

    console.log('Hello world');

})();