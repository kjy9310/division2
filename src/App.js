import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './containers/menuBar';
import GearCard from './containers/gearCard';
import GearData from './data';

class App extends Component {
  state={
    gears: {
      mask: {},
      chest: {},
      backpack: {},
      gloves: {},
      holster: {},
      kneepads: {},
    },
  }

  render() {
    const selectedData = GearData.en;
    const { gears } = this.state;
    return (
      <div className="App">
      <ButtonAppBar/>
        <header className="App-header">
          <Grid container spacing={24} style={{ maxWidth: '600px' }}>
            <Grid item xs={4}>
              <GearCard title="1Weapon" typeName="weapon" gearData={selectedData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="2Weapon" typeName="weapon" gearData={selectedData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="subWeapon" typeName="weapon" gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Mask" typeName="mask" gear={gears} gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Chest" typeName="chest" gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
             <GearCard title="Backpack" typeName="backpack" gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Gloves" typeName="gloves" gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Holster" typeName="holster" gearData={selectedData}/>
            </Grid>
            <Grid item xs={6}>
              <GearCard title="Kneepads" typeName="kneepads" gearData={selectedData}/>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
