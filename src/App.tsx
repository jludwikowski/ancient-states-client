import React, { Component } from 'react';
import './App.css';
import {CityView} from "./CityInterface/view/CityView";
import {ArmiesView} from "./ArmiesInterface/view/ArmiesView";
import {LeadersView} from "./LeadersInterface/view/LeadersView";
import {Navbar} from "./BasicInterface/components/Navbar";

class App extends Component {
  render() {
    return (
        <>
          <Navbar/>
          <div className="App">
            <div>
              <CityView />
            </div>
            <div>
              <ArmiesView />
            </div>
            <div>
               <LeadersView />
            </div>
          </div>
        </>
    );
  }
}

export default App;
