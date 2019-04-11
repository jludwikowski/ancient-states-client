import React from "react"
import {LeadersList} from "../components/LeadersList";
import Leader from "../../Models/Leader";

export class LeadersView extends React.Component {

    leadersList: Leader[] = [];

    componentDidMount(): void {

    };

    onDismiss(id:number) {

    };

    render() {
        return(
            <>
                <LeadersList leadersList={this.leadersList} onDismiss={this.onDismiss} />
            </>
        )}
}
