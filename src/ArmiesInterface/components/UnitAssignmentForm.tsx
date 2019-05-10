import React from "react";
import Army from "../../Models/Army";
import UnitPrototype from "../../Models/UnitPrototype";
import UnitReference from "../../Models/UnitReference";
import {SingleUnitForm} from "./SingleUnitForm";

interface Props {
    army: Army,
    unitPrototypes: UnitPrototype[],
    getUnit(event:React.ChangeEvent<HTMLInputElement>): void,
}

export class UnitAssignmentForm extends React.PureComponent<Props,UnitReference[]> {

    public render() {
        return (
            <div className="input-group mb-3">
                {this.props.army.units ? (
                    Object.values(this.props.army.units).map((unit, index) => (
                        <SingleUnitForm key={index} unit={unit} getUnit={this.props.getUnit} unitPrototypes={this.props.unitPrototypes} />
                    ))) : null }
            </div>
        );
    }
}
