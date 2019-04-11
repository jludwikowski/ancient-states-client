import React from "react";
import { ArmyCard } from "../components/ArmyCard";
import Army from "../../Models/Army";

type Props = {
    armiesList: Army[],
    onCreate(): void,
    onDisband(id: number): void
};

export const ArmyTable: React.FunctionComponent<Props>  = props => (
    <div className="card-group">
        {props.armiesList.map((army, index) => (
            <React.Fragment key={army.id}>
                <ArmyCard army={army} onDisband={props.onDisband}/>
            </React.Fragment>
        ))}
        <button className="btn btn-outline-secondary" onClick={() => props.onCreate()}>
            Create new Army
        </button>
    </div>
);
