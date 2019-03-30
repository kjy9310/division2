import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OpenDialog from '../components/openDialog';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    talents:[],
  };

  handleChange = ({name,index}) => event => {
  	if (!index&&index!==0){
  		this.setState({ [name]: event.target.value });	
  	}else{
  		let new_property = this.state[name]
  		new_property[index] = event.target.value
  		this.setState({ [name]: new_property });	
  	}
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  talentSelect = (index) => {
  	const { props:{gearData},state:{talents, gearIndex} } = this;
  	const gearTalentsType = gearData.equipments[gearIndex].talents[index]
  	const filteredTalents=gearData.talents.filter((element)=>{
  		return (gearTalentsType[element.type1]!==undefined) && (gearTalentsType[element.type1].indexOf(element.type2) > -1)
  		})
  	return (
  		<>
  		<InputLabel htmlFor={'talents'+index}>talents</InputLabel>
        <Select
          value={talents[index]?talents[index]:''}
          onChange={this.handleChange({name:'talents',index})}
          input={<Input id={'talents'+index} />}
        >
        {
        	filteredTalents.map((element)=>{
      			return <MenuItem value={element.name}> {element.name} </MenuItem>
      		}
      	)} 
        </Select>
        </>
  		)
  }

  content(props){
  	const { classes, gearData } = this.props
  	if (!gearData) {
  		return
  	}
  	const {gearIndex}= this.state
  	const gears=gearData.equipments
  	return (
  			<form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="gear">Gear</InputLabel>
                <Select
                  input={<Input id="gear" />}
                  value={gearIndex}
                  onChange={this.handleChange({name:'gearIndex'})}
                >
				{gears.map((element, index)=>{
                  		return <MenuItem value={index}> {element.name} </MenuItem>
                  	}
                  	)}                  
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                {
                	gears[gearIndex].talents.map((element, index)=>{
                		return this.talentSelect(index)
                	})
                }
              </FormControl>

            </form>
        )
  }

  render() {
    const { classes } = this.props;

    return (
          <OpenDialog classes={classes} content={this.content(this.props)}/>
    );
  }
}

GearDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearDialog);
