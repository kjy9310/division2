import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AttributeControl from '../components/attributeControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class GearDialog extends React.Component {
  state = {
    open: false,
    age: '',
    gearIndex: 0,
    talents: [],
    brand: '',
    protocol: {
      Offensive: 0, Defensive: 0, Utility: 0,
    },
    system: {
      Offensive: 0, Defensive: 0, Utility: 0,
    },
    attribute: ['', '', '', ''],
  };

  handleChange = ({ name, index }) => (event) => {
    if (name === 'gearIndex') {
      const { props: { gearData } } = this;
      const newBrand = gearData.equipments[event.target.value].brand;
      this.setState({
        talents: [],
        brand: newBrand,
        [name]: event.target.value,
        protocol: {
          Offensive: 0, Defensive: 0, Utility: 0,
        },
        system: {
          Offensive: 0, Defensive: 0, Utility: 0,
        },
        attribute: ['', '', '', ''],
      });
    } else if (name === 'brand' && event.target.value !== '') {
      const { props: { gearData } } = this;
      const result = gearData.equipments.findIndex(element => element.brand === event.target.value);
      this.setState({ [name]: event.target.value, gearIndex: result });
    } else if (!index && index !== 0) {
      this.setState({ [name]: event.target.value });
    } else {
      const newProperty = this.state[name];
      newProperty[index] = event.target.value;
      this.setState({ [name]: newProperty });
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  talentSelect = (index) => {
    const { props: { classes, gearData, translate }, state: { talents, gearIndex } } = this;
    const gearTalentsType = gearData.equipments[gearIndex].talents[index];

    const talentCheck = element => (gearTalentsType[element.type1] !== undefined) && (gearTalentsType[element.type1].indexOf(element.type2) > -1);

    const filteredTalents = gearData.talents.filter(talentCheck);

    return (
    <Grid item xs={6}>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={`talents${index}`}>talents</InputLabel>
      <Select
        value={talents[index] ? talents[index] : ''}
        onChange={this.handleChange({ name: 'talents', index })}
        input={<Input id={`talents${index}`} />}
      >
      {
        filteredTalents.map(element => <MenuItem value={element.name}> {translate('talents', element.name) && translate('talents', element.name).name} </MenuItem>)}
      </Select>
    </FormControl>
    </Grid>
    );
  }

  gearSelect = () => {
    const { classes, gearData, translate } = this.props;
    const { gearIndex, brand } = this.state;
    const gears = gearData.equipments;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Name">Name</InputLabel>
        <Select
        input={<Input id="Name" />}
        value={gearIndex}
        onChange={this.handleChange({ name: 'gearIndex' })}
        >
        {gears.map((element, index) => {
          if (brand === '' || element.brand === brand) {
            return (
              <MenuItem value={index} style={{wordWrap:'word-break', overflowY:'scroll', whiteSpace:'normal', minWidth:'200px'}}>
                <span style={{left:0,top:0,wordWrap:'word-break', whiteSpace:'normal', minWidth:'200px'}}>
                {translate('gears', element.name).name} 
                </span>
              </MenuItem>
            );
          }
          return '';
        })}
        </Select>
      </FormControl>
    );
  }

  attributeList = () => {
    const { props: { gearData }, state: { gearIndex } } = this;
    return (
      <>
        {gearData.equipments[gearIndex].attribute.map((element, index) => this.attributeSelect(element.type, index))}
      </>
    );
  }

  handleAttributeChange=({ index }) => (event) => {
    const newAttribute = this.state.attribute;
    newAttribute[index] = event.target.value;
    this.setState({ attribute: newAttribute });
  }

  attributeSelect=(type, index) => {
    const { classes } = this.props;
    const inputValue = this.state.attribute[index];
    return (
      <Grid item xs={6}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={`Attribute${index}`}>Attribute{index + 1}</InputLabel>
          <Select
          input={<Input id={`Attribute${index}`} />}
          value={inputValue}
          onChange={this.handleAttributeChange({ index })}
          style={{ height: '50px' }}
          >
          {type.map(element => (
              <MenuItem value={element}>
                <AttributeControl typeName={element} value="+"/>
              </MenuItem>
          ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }

  handleAttributeClick=(target, type) => {
    const { props: { gearData }, state: { gearIndex } } = this;
    const targetObject = { ...this.state[target] };
    if (targetObject[type] === gearData.equipments[gearIndex][target][type]) {
      return;
    }
    targetObject[type] += 1;
    this.setState({ [target]: targetObject });
  }

  handleAttributeDelete=(target, type) => {
    const targetObject = { ...this.state[target] };
    targetObject[type] = 0;
    this.setState({ [target]: targetObject });
  }

  protocolList = () => {
    const { gearData, translate } = this.props;
    const { gearIndex, protocol: { Offensive, Defensive, Utility } } = this.state;
    const target = 'protocol';
    return (
      <>
      <Grid item xs={12} style={{ padding: '5px', margin: '5px' }}>
        <InputLabel htmlFor={'protocol'}>Protocol</InputLabel>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Offensive" value={`${Offensive}/${gearData.equipments[gearIndex][target].Offensive}`} handleClick={() => { this.handleAttributeClick(target, 'Offensive'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Offensive'); }}/>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Defensive" value={`${Defensive}/${gearData.equipments[gearIndex][target].Defensive}`} handleClick={() => { this.handleAttributeClick(target, 'Defensive'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Defensive'); }}/>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Utility" value={`${Utility}/${gearData.equipments[gearIndex][target].Utility}`} handleClick={() => { this.handleAttributeClick(target, 'Utility'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Utility'); }}/>
      </Grid>
      </>
    );
  }

  systemList = () => {
    const { gearData, translate } = this.props;
    const { gearIndex, system: { Offensive, Defensive, Utility } } = this.state;
    const target = 'system';
    return (
      <>
      <Grid item xs={12} style={{ padding: '5px', margin: '5px' }}>
      <InputLabel htmlFor={'system'}>System</InputLabel>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Offensive" value={`${Offensive}/${gearData.equipments[gearIndex][target].Offensive}`} handleClick={() => { this.handleAttributeClick(target, 'Offensive'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Offensive'); }}/>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Defensive" value={`${Defensive}/${gearData.equipments[gearIndex][target].Defensive}`} handleClick={() => { this.handleAttributeClick(target, 'Defensive'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Defensive'); }}/>
      </Grid>
      <Grid item xs={4}>
        <AttributeControl typeName="Utility" value={`${Utility}/${gearData.equipments[gearIndex][target].Utility}`} handleClick={() => { this.handleAttributeClick(target, 'Utility'); }} handleDelete={() => { this.handleAttributeDelete(target, 'Utility'); }}/>
      </Grid>
      </>
    );
  }

  content() {
    const { classes, gearData, translate } = this.props;
    if (!gearData) {
      return '';
    }
    const { gearIndex, talents, brand } = this.state;
    const gears = gearData.equipments;
    const brandList = [];
    gearData.equipments.forEach((element) => {
      if (brandList.indexOf(element.brand) === -1) {
        brandList.push(element.brand);
      }
    });

    return (

    <form className={classes.container}>
    <Grid container style={{ minWidth: '276px' }}>
      <Grid item xs={12}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Brand">Brand</InputLabel>
        <Select
        input={<Input id="Brand" />}
        value={brand}
        onChange={this.handleChange({ name: 'brand' })}
        >
        <MenuItem value=''>All</MenuItem>
        {brandList.map(element => <MenuItem value={element}> {translate('brands', element).name} </MenuItem>)}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <Typography className={classes.pos} color="textSecondary">
        {translate('brands', brand).bonuses.join(' / ')}
      </Typography>
      </Grid>
      <Grid item xs={12}>
      {this.gearSelect()}
      </Grid>
      {
      gears[gearIndex].talents.map((element, index) => this.talentSelect(index))
      }
      {talents.map(
        talentName => (
            <Typography className={classes.pos} color="textSecondary">
              {translate('talents', talentName).description}
            </Typography>
        ),
      )}
      <Grid item xs={12}>
      </Grid>
      {this.attributeList()}
      {this.protocolList()}
      {this.systemList()}
    </Grid>
    </form>

    );
  }

  updateGear = () => {
    const {
      props: { gearChange, gearData }, state: {
        gearIndex, talents, protocol, system, attribute,
      },
    } = this;
    const { brand } = gearData.equipments[gearIndex];
    const sumedAttribute = { Offensive: 0, Defensive: 0, Utility: 0 };
    attribute.forEach((element) => {
      sumedAttribute[element] += 1;
    });
    sumedAttribute.Offensive += protocol.Offensive;
    sumedAttribute.Offensive += system.Offensive;
    sumedAttribute.Defensive += protocol.Defensive;
    sumedAttribute.Defensive += system.Defensive;
    sumedAttribute.Utility += protocol.Utility;
    sumedAttribute.Utility += system.Utility;
    gearChange({
      name: gearData.equipments[gearIndex].name,
      talents,
      brand,
      attribute: sumedAttribute,
    });
  }

  render() {
    const { classes, translate, typeName } = this.props;

    return (
      <>  
        {this.content(this.props)}
        <Grid item xs={12} style={{margin:'10px'}}>
          <Button
          style={{color:'#fff',backgroundColor:'#ff6a13',width:'100%'}}
          variant="contained"
          onClick={this.updateGear} className={classes.button}>
          SAVE
          </Button>
        </Grid>
      </>
    );
  }
}

GearDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearDialog);
