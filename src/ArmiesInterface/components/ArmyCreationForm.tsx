import React from 'react';
import Army from '../../Models/Army';
import ServerMessageDispatcher from '../../Services/ServerMessageDispatcher';

interface Props {
    owner: number,
    position: string
}

export class ArmyCreationForm extends React.PureComponent<Props, Army> {

    constructor(props:Props) {
        super(props);
        this.state = {
            name: 'New Army',
            description: '',
            owner: this.props.owner,
            position: this.props.position,
            commander: null,
            units: [{ baseUnit: 1, level: 1, number: 5, }],
        }
    };

    public render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="New Army" name="name" onChange={this.handleChange} />
                <input type="text" className="form-control" placeholder="" name="description" onChange={this.handleChange} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.onCreate}>
                        Create
                    </button>
                </div>
            </div>
        );
    };

    private onCreate = () => {
        ServerMessageDispatcher.sendCreateArmy(this.state);
    };

    private handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>  {
        this.setState({
            /* Yes I know I know. I'm shameless */
            ...this.state,
            [event.target.name]: event.target.value
        });
    };
}
