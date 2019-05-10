import React from 'react';
import Army from '../../Models/Army';
import UnitPrototype from "../../Models/UnitPrototype";
import UnitReference from "../../Models/UnitReference";
import ServerMessageDispatcher from '../../Services/ServerMessageDispatcher';
import {UnitAssignmentForm} from "./UnitAssignmentForm";

interface Props {
    army: Army,
    unitPrototypes: UnitPrototype[],
}

export class ArmyCreationForm extends React.Component<Props, Army> {

    constructor(props:Props) {
        super(props);
        this.state = {
            name: 'New Army',
            description: '',
            owner: this.props.army.owner,
            position: this.props.army.position,
            commander: null,
            units: [{ baseUnit: 1, level: 1, number: 5, }],
        }
    };

    public render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="New Army" name="name" onChange={this.handleChange} />
                <input type="text" className="form-control" placeholder="" name="description" onChange={this.handleChange} />
                <UnitAssignmentForm army={this.props.army} unitPrototypes={this.props.unitPrototypes} getUnit={this.getUnit}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.onCreate}>
                        Create
                    </button>
                </div>
            </div>
        );
    };

    private onCreate = () => {
        ServerMessageDispatcher.sendCreateArmy(this.state);
    };

    private handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>  {
        this.setState({
            /* Yes I know I know. I'm shameless */
            ...this.state,
            [event.target.name]: event.target.value
        });
    };

    private getUnit = (event:React.ChangeEvent<HTMLInputElement>) =>  {
        /*Check if we already have a unit like that*/
        const level = event.target.getAttribute('data-level');
        const baseUnit = event.target.getAttribute('data-base');
        if( level !== null && baseUnit !== null ) {
            const newUnit: UnitReference = {
                baseUnit: +baseUnit,
                level: +level,
                number: +event.target.value,
            };

            const units = this.state.units;
            const existingUnit = units.find(unit => unit.baseUnit === newUnit.baseUnit && unit.level === newUnit.level );
            if(existingUnit) {
                existingUnit.number = newUnit.number;
            } else {
                units.push(newUnit);
            }

            this.setState({
                /* Yes I know I know. I'm shameless */
                ...this.state,
                units
            });
        }
    };
}
