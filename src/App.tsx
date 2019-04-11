import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import {ArmiesView} from './ArmiesInterface/view/ArmiesView';
import {Navbar} from './BasicInterface/components/Navbar';
import {StatusPane} from './BasicInterface/components/StatusPane';
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
            <>
                <Navbar />
                <StatusPane {...this.state.resources} />
                <div className='App container'>
                    <Switch>
                        <Redirect path='/' exact={true} to='/cityView' />

                        <Route path='/cityView' exact={true} component={CityView} />
                        <Route path='/armiesView' component={ArmiesView} />
                        <Route path='/leadersView' component={LeadersView} />

                        <Route path='*' render={() => <p>404 page not found! ;-( </p>} />
                    </Switch>
                </div>
            </>
        );
    }
}

export default App;
