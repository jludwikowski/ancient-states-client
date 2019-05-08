import React from "react";
import Army from "../../Models/Army";

interface Props {
    army: Army
}

export const ArmyTurnReport: React.FunctionComponent<Props> = props => (
    <li className="list-group-item">
        <span>{props.army.name}</span>
        <span className="unit">
        {props.army.units.map((unit, index) => (
            <React.Fragment key={index}>
                <div>UnitId: {unit.baseUnit}</div>
                <div>Level: {unit.level}</div>
                <div>Number: {unit.number}</div>
            </React.Fragment>
        ))}
        </span>
    </li>
)
