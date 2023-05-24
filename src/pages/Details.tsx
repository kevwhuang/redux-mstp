import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function mapStateToProps(state: any): Object {
    return { data: state.data };
}

function Details(props: any): React.ReactElement {
    const data: Object[] = props.data;
    const params: Readonly<any> = useParams();
    const raw: any = data[params.id - 1];

    const fields: any = {
        Acceleration: raw['Acceleration'],
        Country: raw['Origin'],
        Cylinders: raw['Cylinders'],
        Displacement: raw['Displacement'],
        Horsepower: raw['Horsepower'],
        MPG: raw['Miles_per_Gallon'],
        Weight: raw['Weight_in_lbs'],
        Year: raw['Year'],
    };

    return (
        <div className="details">
            <h2>{raw['Name'].toUpperCase()}</h2>
            {Object.keys(fields).map((e: string): React.ReactElement => (
                <ul key={uuid()}>
                    <li>{e}: {fields[e]}</li>
                </ul>
            ))}
        </div>
    );
}

export default connect(mapStateToProps)(Details);
