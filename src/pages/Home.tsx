import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import data from '../data/data.json';

export default function () {
    return (
        <div className="cards">
            {data.map(car => {
                const path = `details?id=${car.id}`;

                return (
                    <div key={uuid()}>
                        <h6>{car['Name'].toUpperCase()}</h6>
                        <ul>
                            <li>Horsepower: {car['Horsepower']}</li>
                            <li>Cylinders: {car['Cylinders']}</li>
                            <li>MPG: {car['Miles_per_Gallon']}</li>
                        </ul>
                        <NavLink className="details-link" to={path}>View Details</NavLink>
                    </div>
                );
            })}
        </div>
    );
}
