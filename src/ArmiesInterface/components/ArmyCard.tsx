import React from 'react';
import Army from '../../Models/Army';

interface Props {
    army: Army,
    onDisband(id: number): void
}

export const ArmyCard: React.FunctionComponent<Props> = props => (
    <li className="list-group-item">
        <div>Name: {props.army.name}</div>
        <div>Description: {props.army.description}</div>
        {props.army.units.map((unit, index) => (
            <React.Fragment key={unit.unitId}>
                <div>UnitId :{unit.unitId}</div>
                <div>Number of troops: {unit.number}</div>
            </React.Fragment>
        ))}
        <button className='btn btn-outline-secondary' onClick={() => props.onDisband(props.army.id)}>
            Disband this army
        </button>
    </li>
)
