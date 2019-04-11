import React from "react";
import Building from "../../Models/Building";
import Leade from "../../Models/Leader";

type Props = {
    leader: Leade,
    onDismiss(id: number): void;
} & React.HTMLAttributes<HTMLDivElement>;

export const LeaderCard: React.FunctionComponent<Props> = props => (
    <div {...props}>
        <img src={props.leader.imageUrl} />
        <div>{props.leader.name}</div>
        <div>{props.leader.cunning}</div>
        <div>{props.leader.leadership}</div>
        <div>{props.leader.wisdom}</div>
        <div>{props.leader.willpower}</div>
        <button className="btn btn-outline-secondary" onClick={() => props.onDismiss(props.leader.id)}>
            Dismiss This Leader
        </button>
    </div>
)
