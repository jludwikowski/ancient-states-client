import React, { Component } from 'react';
import './App.css';
import {CityView} from "./CityInterface/view/CityView";
import {ArmiesView} from "./ArmiesInterface/view/ArmiesView";
import {LeadersView} from "./LeadersInterface/view/LeadersView";
import {Navbar} from "./BasicInterface/components/Navbar";
import {Redirect, Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
        <>
          <Navbar/>
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
