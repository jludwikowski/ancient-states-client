import React from "react";
import {LeaderCard} from "./LeaderCard";
import Leader from "../../Models/Leader";

type Props = {
    leadersList: Leader[],
    onDismiss(id: number): void;
};

export const LeadersList: React.FunctionComponent<Props> = ({leadersList, onDismiss}) => (
    <div className="card-group">
        {leadersList && leadersList.length !== 0 ? leadersList.map((leader, index) => (
            <React.Fragment key={leader.id}>
                <LeaderCard leader={leader} onDismiss={onDismiss}/>
            </React.Fragment>
        )) : <div>No Leaders </div>}
    </div>
);
