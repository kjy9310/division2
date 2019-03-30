import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './containers/menuBar';
import GearCard from './containers/gearCard';
import GearData from './data';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  showProps = ()=>{
    console.log("showprops")
    console.log()
  }

  render() {
    
    const selectedData = GearData['en']
    return (
      <div className="App">
        <ButtonAppBar/>
        <header className="App-header">
          <Grid container spacing={24} style={{maxWidth:'600px'}}>
            <Grid item xs={4}>
              <GearCard title="1Weapon" gearData={selectedData["1Weapon"]}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="2Weapon" gearData={selectedData["2Weapon"]}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="subWeapon" gearData={selectedData["subWeapon"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Mask" gearData={selectedData["mask"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Chest" gearData={selectedData["chest"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="backpack" gearData={selectedData["backpack"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Gloves" gearData={selectedData["gloves"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Holster" gearData={selectedData["holster"]}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Kneepads" gearData={selectedData["kneepads"]}/>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
