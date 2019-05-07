import React from 'react'
import City from "../../Models/City";
import { BuildingBrowser } from '../components/BuildingBrowser';

export class CityView extends React.Component<City> {

    public onBuild(id:number) {
        console.log('On Build');
    };

    public render() {
        return(
            <>
                <BuildingBrowser buildingList={this.props.buildings} onBuild={this.onBuild} />
            </>
    )}
}
