import React from 'react';
import Army from '../../Models/Army';
import UnitPrototype from '../../Models/UnitPrototype';
import {ArmyCard} from '../components/ArmyCard';
import {ArmyCreationForm} from "../components/ArmyCreationForm";

interface Props {
    armies: Army[],
    baseUnits: UnitPrototype[]
};

interface State {
    creatingArmy: boolean;
}

export class ArmiesView extends React.Component<Props, State> {

    constructor(props:Props) {
        super(props);
        this.state = { creatingArmy: false };
    }

    public onDisband = (id:number | undefined) => {
        console.log('On onDisband');
    };

    public onCreate = () => {
        this.setState( {creatingArmy: true })
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
                    <button className='btn btn-outline-secondary' onClick={this.onCreate}>
                        Create new Army
                    </button>
                </div>
            </div>
            {this.state.creatingArmy ? <ArmyCreationForm army={this.props.armies[0]} unitPrototypes={this.props.baseUnits} />
                : null }
        </>
    }
}
