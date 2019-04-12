import React from "react";
import Army from "../../Models/Army";
import {ArmyTurnReport} from "./ArmyTurnReport";

interface Props {
    armiesList: Army[]
}

export const BattleTurn: React.FunctionComponent<Props> = props => (
    <li className="list-group-item">
        <ul className="list-group">
            {props.armiesList.map((army) => (
                <React.Fragment key={army.id}>
                    <ArmyTurnReport army={army} />
                </React.Fragment>
            ))}
        </ul>
    </li>
)
