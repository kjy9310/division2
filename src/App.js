import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './containers/menuBar';
import GearCard from './containers/gearCard';
import BrandBoard from './containers/brandBoard';
import AttributeGraph from './containers/attributeGraph';
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
    try {
    value = eval(`localeData.${path}`);
    } catch (e) {
      try {
        value = GearData.en.objectPath[targetName];
      } catch (e2) {
        // console.log(e);
        value = { name: targetName, description: null, bonuses: [] };
      }
    }
    if (!value) {
      try {
        value = GearData.en.objectPath[targetName];
      } catch (e) {
        // console.log(e);
        value = { name: targetName, description: null, bonuses: [] };
      }
    }
    return value;
  }

  render() {
    const gearData = GearData.gears;
    const { gears } = this.state;
    return (
      <div className="App">
      <ButtonAppBar localeControl={this.localeControl}/>
        <header className="App-header">
          <Grid container style={{ maxWidth: '800px', marginBottom: '10px' }}>
            <Grid item xs={3} style={this.gridStyle}>
              <AttributeGraph translate={this.translate} gears={gears}/>
            </Grid>
            <Grid item xs={9} style={this.gridStyle}>
              <BrandBoard translate={this.translate} gears={gears}/>
            </Grid>
          </Grid>
          <Grid container style={{ maxWidth: '800px' }}>
            {/* <Grid item xs={4}>
              <GearCard title="1Weapon" typeName="weapon" gearData={gearData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="2Weapon" typeName="weapon" gearData={gearData}/>
            </Grid>
            <Grid item xs={4}>
              <GearCard title="subWeapon" typeName="weapon" gearData={gearData}/>
            </Grid> */}
            
              <GearCard translate={this.translate} setGear={this.setGear} typeName="mask" gear={gears} gearData={gearData}/>
            
              <GearCard translate={this.translate} setGear={this.setGear} typeName="chest" gear={gears} gearData={gearData}/>
             <GearCard translate={this.translate} setGear={this.setGear} gear={gears} typeName="backpack" gearData={gearData}/>
              <GearCard translate={this.translate} setGear={this.setGear} gear={gears} typeName="gloves" gearData={gearData}/>
              <GearCard translate={this.translate} setGear={this.setGear} gear={gears} typeName="holster" gearData={gearData}/>
              <GearCard translate={this.translate} setGear={this.setGear} gear={gears} typeName="kneepads" gearData={gearData}/>
            
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
