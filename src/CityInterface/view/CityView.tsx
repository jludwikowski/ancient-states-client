import React from "react"
import { BuildingBrowser } from "../components/BuildingBrowser";
import Building from "../../Models/Building";
import { defaultBuildingList } from "../../BackEndMock/buildings"

export class CityView extends React.Component {

    buildingList: Building[] = defaultBuildingList;

    componentDidMount(): void {

    };

    onBuild(id:number) {

    };

    render() {
        return(
            <>
                <BuildingBrowser buildingList={this.buildingList} onBuild={this.onBuild} />
            </>
    )}
}
