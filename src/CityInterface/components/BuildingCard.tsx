import React from "react";
import Building from "../../Models/Building";

type Props = {
    building: Building,
    onBuild(id: number): void;
} & React.HTMLAttributes<HTMLDivElement>;

export const BuildingCard: React.FunctionComponent<Props> = props => (
    <div {...props}>
        <img src={props.building.imageUrl} />
        <div>{props.building.name}</div>
        <div>{props.building.level}</div>
        <div>{props.building.cost}</div>
        <div>{props.building.buildingTime}</div>
        <button className="btn btn-outline-secondary" onClick={() => props.onBuild(props.building.id)}>
            Build level {props.building.level+1}
        </button>
    </div>
)
