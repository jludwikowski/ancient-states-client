import React from 'react';
import Building from '../../Models/Building';

type Props = {
    building: Building,
    onBuild( id: number | undefined ): void;
} & React.HTMLAttributes<HTMLDivElement>;

export const BuildingCard: React.FunctionComponent<Props> = props => (
    <div className="card">
        <img className="card-img-top" src={props.building.imageUrl} />
        <div className="card-body">
            <h5 className="card-title">Name: {props.building.name}</h5>
            <div>Level: {props.building.level}</div>
            <div>Cost: {props.building.baseCost}</div>
            <div>Building time: {props.building.baseBuildingTime}</div>
        </div>
        <button className='btn btn-outline-secondary' onClick={() => props.onBuild(props.building.id)}>
            Build level {props.building.level+1}
        </button>
    </div>
)
