import React from 'react';
import Army from '../../Models/Army';
import UnitPrototype from "../../Models/UnitPrototype";

interface Props {
    army: Army,
    baseUnits: UnitPrototype[],
    onDisband( id: number | undefined ): void,
}

export const ArmyCard: React.FunctionComponent<Props> = props => (
    <li className="list-group-item">
        <div>Name: {props.army.name}</div>
        <div>Description: {props.army.description}</div>
        {props.army.units ? (
            Object.values(props.army.units).map((unit, index) => (
            <React.Fragment key={index}>
                <div>UnitName :{props.baseUnits[unit.baseUnit].name}</div>
                <div>Level :{unit.level}</div>
                <div>Number of troops: {unit.number}</div>
            </React.Fragment>
        ))) : null }
        <button className='btn btn-outline-secondary' onClick={() => props.onDisband(props.army.id)}>
            Disband this army
        </button>
    </li>
);
