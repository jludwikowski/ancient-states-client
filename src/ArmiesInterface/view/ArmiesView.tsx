import React from 'react';
import {defaultArmies} from '../../BackEndMock/armies';
import Army from '../../Models/Army';
import {ArmyTable} from '../components/ArmiesTable';

export class ArmiesView extends React.Component {

    public armiesList: Army[] = defaultArmies;

    public componentDidMount(): void {
        console.log("On componentDidMount");
    };

    public onDisband(id:number) {
        console.log("On onDisband");
    };

    public onCreate() {
        console.log("On onCreate");
    };

    public render () {
        return (
            <>
                <ArmyTable armiesList={this.armiesList} onCreate={this.onCreate} onDisband={this.onDisband}/>
            </>
        )
    }
}
