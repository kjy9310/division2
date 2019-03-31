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
    localeData: GearData.en,
  }

  setGear = (part, singleGearSet) => {
    const { gears } = this.state;
    gears[part] = singleGearSet;
    const newGears = gears;
    this.setState({
      gears: newGears,
    });
    console.log(gears);
  }

  localeControl = (locale) => {
    this.setState({
      localeData: GearData[locale],
    });
  }

  translate = (objectPath, targetName) => {
    const { localeData } = this.state;
    const path = `${objectPath}['${targetName}']`;
    let value;
    value = eval(`localeData.${path}`);
    if (!value) {
      try {
        value = GearData.en.objectPath[targetName];
      } catch (e) {
        console.log(e);
        value = { name: targetName, description: null, bonuses: [] };
      }
    }
    return value;
  }

  gridStyle={ padding: '5px' }

  render() {
    const gearData = GearData.gears;
    const { gears } = this.state;
    return (
      <div className="App">
      <ButtonAppBar localeControl={this.localeControl}/>
        <header className="App-header">
          <Grid container style={{ maxWidth: '600px' }}>
            {/* <Grid item xs={4}>
              <GearCard title="1Weapon" typeName="weapon" gearData={gearData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="2Weapon" typeName="weapon" gearData={gearData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="subWeapon" typeName="weapon" gearData={gearData}/>
            </Grid> */}
            <Grid item xs={6} style={this.gridStyle}>
              <GearCard title="Mask" translate={this.translate} setGear={this.setGear} typeName="mask" gear={gears} gearData={gearData}/>
            </Grid>
            <Grid item xs={6} style={this.gridStyle}>
              <GearCard title="Chest" typeName="chest" gearData={gearData}/>
            </Grid>
            <Grid item xs={6} style={this.gridStyle}>
             <GearCard title="Backpack" typeName="backpack" gearData={gearData}/>
            </Grid>
            <Grid item xs={6} style={this.gridStyle}>
              <GearCard title="Gloves" typeName="gloves" gearData={gearData}/>
            </Grid>
            <Grid item xs={6} style={this.gridStyle}>
              <GearCard title="Holster" typeName="holster" gearData={gearData}/>
            </Grid>
            <Grid item xs={6} style={this.gridStyle}>
              <GearCard title="Kneepads" typeName="kneepads" gearData={gearData}/>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
