import React from 'react';
import Army from '../../Models/Army';
import { ArmyCard } from '../components/ArmyCard';

interface Props {
    armiesList: Army[],
    onCreate(): void,
    onDisband(id: number): void
};

export const ArmyTable: React.FunctionComponent<Props>  = props => (
    <div>
        <ul className="list-group">
            {props.armiesList.map((army) => (
                <React.Fragment key={army.id}>
                    <ArmyCard army={army} onDisband={props.onDisband}/>
                </React.Fragment>
            ))}
        </ul>
        <div className="card">
            <button className='btn btn-outline-secondary' onClick={() => props.onCreate()}>
                Create new Army
            </button>
        </div>
    </div>
);
