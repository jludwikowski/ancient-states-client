import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import {ArmiesView} from './ArmiesInterface/view/ArmiesView';
import {Navbar} from './BasicInterface/components/Navbar';
import {Page404} from "./BasicInterface/components/Page404";
import {StatusPane} from './BasicInterface/components/StatusPane';
import {BattleReportsView} from "./BattleReportInterface/view/BattleReportsView";
import {CityView} from './CityInterface/view/CityView';
import {LeadersView} from './LeadersInterface/view/LeadersView';
import Player from './Models/Player';
import ServerDataProvider from './Services/ServerDataProvider';

interface State { player: Player };

class App extends React.Component {

    public state:State = {
        player: {
            id: 0,
            email: 'none',
            armies: [],
            name: '',
            description: '',
            city: {
                id: 0,
                name: 'Capital',
                description: '',
                numberOfMen: 0,
                numberOfWomen: 0,
                numberOfSlaves: 0,
                buildings: [],
            },
            resources: {
                id: 0,
                owner: 0,
                food: 0,
                iron: 0,
                timber: 0,
                stone: 0,
                gold: 0,
                influence: 0,
            },
        }
    };

    public async componentDidMount(){
        const player = (await ServerDataProvider.getPlayerData(1)).data;
        this.setState({ player })
    }

    public render() {
        return (
            <div className='flex-container'>
                <Navbar />
                <div className="row">
                    <div className="side-bar">
                        <StatusPane {...this.state.player.resources} />
                    </div>
                    <div className="col-12 main">
                        <Switch>
                            <Redirect path='/' exact={true} to='/cityView' />

                            <Route path='/cityView' exact={true} component={CityView} />
                            <Route path='/armiesView' exact={true} component={ArmiesView} />
                            <Route path='/leadersView' exact={true} component={LeadersView} />
                            <Route path='/battleReports' exact={true} component={BattleReportsView} />

                            <Route path='*' component={Page404} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
