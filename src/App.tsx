import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {ArmiesView} from './ArmiesInterface/view/ArmiesView';
import {Navbar} from './BasicInterface/components/Navbar';
import {Page404} from "./BasicInterface/components/Page404";
import {StatusPane} from './BasicInterface/components/StatusPane';
import {BattleReportsView} from "./BattleReportInterface/view/BattleReportsView";
import {CityView} from './CityInterface/view/CityView';
import {LeadersView} from './LeadersInterface/view/LeadersView';
import Player from './Models/Player';
import UnitPrototype from "./Models/UnitPrototype";
import ServerDataProvider from './Services/ServerDataProvider';

interface State {
    player: Player,
    baseUnits: UnitPrototype[],
};

class App extends React.Component<{},State> {

    public async componentDidMount(){
        const [player, baseUnits] = await Promise.all([
            await ServerDataProvider.getPlayerData(1),
            await ServerDataProvider.getBaseUnits(),
        ]);
        this.setState({ player, baseUnits})
    }

    public render() {
        return (
            <Router>
                <div className='flex-container'>
                    <Navbar />
                    <div className="row">
                        <div className="side-bar">
                            { this.state && this.state.player ? <StatusPane {...this.state.player.resources} /> : null }
                        </div>
                        <div className="col-12 main">
                            <Switch>
                                <Redirect path='/' exact={true} to='/cityView' />

                                <Route path='/cityView' exact={true} render={() => {
                                    return this.state && this.state.player ? <CityView {...this.state.player.city} /> : null
                                } }
                                />
                                <Route path='/armiesView' exact={true} render={() => {
                                    return this.state && this.state.player ? <ArmiesView armies={this.state.player.armies}
                                    baseUnits={this.state.baseUnits} /> : null
                                } }
                                />
                                <Route path='/leadersView' exact={true} component={LeadersView} />
                                <Route path='/battleReports' exact={true} component={BattleReportsView} />

                                <Route path='*' component={Page404} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
