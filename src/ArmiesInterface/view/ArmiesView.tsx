import React from 'react';
import Army from "../../Models/Army";
import UnitPrototype from "../../Models/UnitPrototype";
import {ArmyCard} from "../components/ArmyCard";

interface Props {
    armies: Army[],
    baseUnits: UnitPrototype[]
};

export class ArmiesView extends React.Component<Props> {

    public onDisband(id:number) {
        console.log("On onDisband");
    };

    public onCreate() {
        console.log("On onCreate");
    };

    public render () {
        return <>
            <div>
                <ul className="list-group">
                    {Object.values(this.props.armies).map((army) => (
                        <React.Fragment key={army.id}>
                            <ArmyCard army={army} onDisband={this.onDisband} baseUnits={this.props.baseUnits}/>
                        </React.Fragment>
                    ))}
                </ul>
                <div className="card">
                    <button className='btn btn-outline-secondary' onClick={() => this.onCreate()}>
                        Create new Army
                    </button>
                </div>
            </div>
        </>
    }
}
