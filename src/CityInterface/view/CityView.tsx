import React from 'react'
import { defaultBuildingList } from '../../BackEndMock/buildings'
import Building from '../../Models/Building';
import { BuildingBrowser } from '../components/BuildingBrowser';

export class CityView extends React.Component {

    public buildingList: Building[] = defaultBuildingList;

    public componentDidMount(): void {
        console.log('On componentDidMount');
    };

    public onBuild(id:number) {
        console.log('On Build');
    };

    public render() {
        return(
            <>
                <BuildingBrowser buildingList={this.buildingList} onBuild={this.onBuild} />
            </>
    )}
}
