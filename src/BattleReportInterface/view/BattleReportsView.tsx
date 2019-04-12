import React from "react";
import BattleReport from "../../Models/BattleReport";
import {BattleReportCard} from "../components/BattleReportCard";

export class BattleReportsView extends React.Component {

    public battleReportsList:BattleReport[] = [];

    public componentDidMount(): void {
        console.log("On componentDidMount");
    };

    public onDisband(id:number) {
        console.log("On onDisband");
    };

    public render () {
        return (
            <>
                {(this.battleReportsList && this.battleReportsList.length !== 0) ?
                    this.battleReportsList.map((report, index) => (
                    <BattleReportCard report={report} key={index}/>)
                    ) : (<p>No new battle reports</p>)
                }
            </>
        )
    }

}
