(() => {

    const fullName = ( firstname: string, ...restArgs: string[]): string => {
        return `${firstname} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'Ojeda');

    console.log({ superman });

})();