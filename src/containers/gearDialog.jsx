import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import OpenDialog from '../components/openDialog';

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
  };

  handleChange = ({ name, index }) => (event) => {
    if (name === 'gearIndex') {
      const { props: { gearData } } = this;
      const newBrand = gearData.equipments[event.target.value].brand;
      this.setState({ talents: [], brand: newBrand, [name]: event.target.value });
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
    );
  }

  gearSelect = () => {
    const { classes, gearData } = this.props;
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
              <MenuItem value={index}> {element.name} </MenuItem>
            );
          }
          return '';
        })}
        </Select>
      </FormControl>
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
      <Typography className={classes.pos} color="textSecondary">
        {translate('brands', brand).bonuses.join(' / ')}
      </Typography>
      <br></br>
      {this.gearSelect()}
      <br></br>
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
      </form>
    );
  }

  updateGear = () => {
    const { props: { gearChange, gearData }, state: { gearIndex, talents } } = this;
    const { brand } = gearData.equipments[gearIndex];
    gearChange({
      talents,
      brand,
    });
  }

  render() {
    const { classes } = this.props;

    return (
          <OpenDialog classes={classes} confirmFunction={this.updateGear} content={this.content(this.props)}/>
    );
  }
}

GearDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearDialog);
