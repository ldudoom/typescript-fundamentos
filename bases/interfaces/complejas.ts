(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address
        getFullAddress(id: string): string;
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
        },
        getFullAddress(): string {
            return this.address.zip;
        }
    }

    const client2: Client = {
        name: 'Fher',
        age: 30,
        address: {
            id: 120,
            zip: 'K2S U2A',
            city: 'Toronto'
        },
        getFullAddress(): string {
            return this.address.zip;
        }
    }

    

})();