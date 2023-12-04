(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address
    }

    interface Address {
        id: number,
        zip: string,
        city?: string
    }

    const client: Client = {
        name: 'Raul',
        age: 42,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    }

    const client2: Client = {
        name: 'Fher',
        age: 30,
        address: {
            id: 120,
            zip: 'K2S U2A',
            city: 'Toronto'
        }

    }

    

})();