import React from 'react';
import Army from '../../Models/Army';

type Props = {
    army: Army,
    onDisband(id: number): void
} & React.HTMLAttributes<HTMLDivElement>;

export const ArmyCard: React.FunctionComponent<Props> = props => (
    <div {...props}>
        {props.army.units.map((unit, index) => (
            <React.Fragment key={unit.unitId}>
                <div>{unit.unitId}</div>
                <div>{unit.number}</div>
            </React.Fragment>
        ))}
        <button className='btn btn-outline-secondary' onClick={() => props.onDisband(props.army.id)}>
            Disband this army
        </button>
    </div>
)
