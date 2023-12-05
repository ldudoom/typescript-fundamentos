// Exportacion normal de un elemento
export interface Power {
    id: number;
    desc: string;
}

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    },
];

// Exportacion por defecto
export default powers;