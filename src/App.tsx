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
import Resources from './Models/Resources';

interface State { resources: Resources };

class App extends React.Component {

    public state:State = {
        resources: {
            food: {label: 'Food', value: 0},
            iron: {label: 'Iron', value: 0},
            timber: {label: 'Timber', value: 0},
            stone: {label: 'Stone', value: 0},
            gold: {label: 'Gold', value: 0},
            influence: {label: 'Influence', value: 0}
        }
    };

    public render() {
        return (
            <div className='flex-container'>
                <Navbar />
                <div className="row">
                    <div className="side-bar">
                        <StatusPane {...this.state.resources} />
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
