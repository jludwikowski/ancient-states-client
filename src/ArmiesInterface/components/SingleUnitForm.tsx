import React from "react";
import UnitPrototype from "../../Models/UnitPrototype";
import UnitReference from "../../Models/UnitReference";

interface Props {
    unit: UnitReference,
    unitPrototypes: UnitPrototype[],
    getUnit(event:React.ChangeEvent<HTMLInputElement>): void,
}

export const SingleUnitForm: React.FunctionComponent<Props> = props => (
    <div>
        <div>Unit Name: {props.unitPrototypes[props.unit.baseUnit].name}</div>
        <div>Level: {props.unit.level}</div>
        <div>Number of troops to take: {props.unit.number}</div>
        <input data-base={props.unit.baseUnit}
               data-level={props.unit.level}
               type="number"
               className="form-control"
               placeholder="0"
               name="number"
               onChange={ props.getUnit }
        />
    </div>
)
