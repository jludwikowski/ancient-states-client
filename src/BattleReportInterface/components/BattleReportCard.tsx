import React from "react";
import BattleReport from "../../Models/BattleReport";
import {BattleTurn} from "./BattleTurn";

interface Props {
    report:BattleReport;
}

export const BattleReportCard: React.FunctionComponent<Props> = props => (
    <div>
        <ul className="list-group">
            {props.report.turnList.map((armiesList, index) => (
                <React.Fragment key={index}>
                    <BattleTurn armiesList={armiesList} />
                </React.Fragment>
            ))}
        </ul>
        <button className='btn btn-outline-secondary' onClick={() => props.report.onDisband(props.report.id)}>
            Disband this report
        </button>
    </div>
)
