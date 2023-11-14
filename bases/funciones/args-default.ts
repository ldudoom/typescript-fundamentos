(() => {


    const fullName = ( firstName: string, lastName?: string, upper: boolean = false): string => {
        return upper ? `${firstName} ${lastName || 'No lastname'}`.toUpperCase() : `${firstName} ${lastName || 'No lastname'}`;
    }

    const name = fullName('Tony', 'Stark', true);

    console.log( {name} );

})();