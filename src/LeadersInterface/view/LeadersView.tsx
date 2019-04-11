import React from 'react'
import Leader from '../../Models/Leader';
import {LeadersList} from '../components/LeadersList';

export class LeadersView extends React.Component {

    public leadersList: Leader[] = [];

    public componentDidMount(): void {
        console.log('On componentDidMount');
    };

    public onDismiss(id:number) {
        console.log('On onDismiss');
    };

    public render() {
        return(
            <>
                <LeadersList leadersList={this.leadersList} onDismiss={this.onDismiss} />
            </>
        )}
}
