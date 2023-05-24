import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

function mapStateToProps(state: any): Object {
    return { data: state.data };
}

function Home(props: any): React.ReactElement {
    const data: Object[] = props.data;

    return (
        <div className="cards">
            {data.map((car: any): React.ReactElement => (
                <div key={uuid()}>
                    <h6>{car['Name'].toUpperCase()}</h6>
                    <ul>
                        <li>Horsepower: {car['Horsepower']}</li>
                        <li>Cylinders: {car['Cylinders']}</li>
                        <li>MPG: {car['Miles_per_Gallon']}</li>
                    </ul>
                    <Link className="details-link" to={`details/${car.id}`}>
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default connect(mapStateToProps)(Home);
