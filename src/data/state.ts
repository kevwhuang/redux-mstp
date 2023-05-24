import data from '../data/data.json';

interface Data {
    Acceleration: number,
    Cylinders: number,
    Displacement: number,
    Horsepower: number,
    Miles_per_Gallon: null | number,
    Name: string,
    Origin: string,
    Weight_in_lbs: number,
    Year: string,
    id: number,
}

const state: { data: Data[] } = { data: data };

export default state;
