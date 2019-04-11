import React from "react";
import {ArmyTable} from "../components/ArmiesTable";
import {defaultArmies} from "../../BackEndMock/armies";
import Army from "../../Models/Army";

export class ArmiesView extends React.Component {

    armiesList: Army[] = defaultArmies;

    componentDidMount(): void {

    };

    onDisband(id:number) {

    };

    onCreate() {

    };

    render () {
        return (
            <>
                <ArmyTable armiesList={this.armiesList} onCreate={this.onCreate} onDisband={this.onDisband}/>
            </>
        )
    }
}
