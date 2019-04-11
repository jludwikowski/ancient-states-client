import React, { Component } from 'react';
import './App.css';
import {CityView} from "./CityInterface/view/CityView";
import {ArmiesView} from "./ArmiesInterface/view/ArmiesView";
import {LeadersView} from "./LeadersInterface/view/LeadersView";
import {Navbar} from "./BasicInterface/components/Navbar";
import {Redirect, Route, Switch} from "react-router";
import {StatusPane} from "./BasicInterface/components/StatusPane";
import Resources from "./Models/Resources";

type Props = {

};

type State = {
    reousrces: Resources;
};

class App extends Component<Props, State> {

    state = {
        reousrces: {
            food: {label: "Food", value: 0},
            iron: {label: "Iron", value: 0},
            timber: {label: "Timber", value: 0},
            stone: {label: "Stone", value: 0},
            gold: {label: "Gold", value: 0},
            influence: {label: "Influence", value: 0}
        }
    };

  render() {
    return (
        <>
          <Navbar />
          <StatusPane {...this.state.reousrces} />
          <div className="App container">
              <Switch>
                  <Redirect path="/" exact={true} to="/cityView" />

                  <Route path="/cityView" exact={true} component={CityView} />
                  <Route path="/armiesView" component={ArmiesView} />
                  <Route path="/leadersView" component={LeadersView} />

                  <Route path="*" render={() => <p>404 page not found! ;-( </p>} />
              </Switch>
          </div>
        </>
    );
  }
}

export default App;
