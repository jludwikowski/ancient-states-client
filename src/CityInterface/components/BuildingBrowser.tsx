import React from "react";
import Building from "../../Models/Building";
import { BuildingCard } from "../components/BuildingCard";

type Props = {
    buildingList: Building[],
    onBuild(id: number): void;
};

export const BuildingBrowser: React.FunctionComponent<Props> = ({buildingList, onBuild}) => (
    <div className="card-group">
        {buildingList.map((building, index) => (
            <React.Fragment key={building.id}>
                <BuildingCard building={building} onBuild={onBuild}/>
            </React.Fragment>
        ))}
    </div>
);
