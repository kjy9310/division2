import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// import FaceIcon from '@material-ui/icons/Face';
// import DoneIcon from '@material-ui/icons/Done';
import SettingsBackupRestore from '@material-ui/icons/SettingsBackupRestore';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function icon(color, src, alt) {
  return (
    <Avatar style={{ backgroundColor: color }}>
      <img alt={alt} style={{ height: '18px', width: '18px' }}src={src}/>
    </Avatar>
  );
}

function AttributeControl(props) {
  const {
    classes, value, typeName, disabled, handleClick, handleDelete,
  } = props;
  let src;
  let color;
  switch (typeName) {
    case 'Utility':
      color = '#ead001';
      src = './battery64.png';
      break;
    case 'Defensive':
      color = '#5074fb';
      src = './shield64.png';
      break;
    case 'Offensive':
      color = '#ff6a69';
      src = './target64.png';
      break;
    default:
  }
  if (disabled) {
    color = '';
  }
  return (
    <Chip
      style={{ borderColor: color, margin: 0 }}
      avatar={icon(color, src, typeName)}
      label={value}
      onClick={!disabled && handleClick}
      className={classes.chip}
      onDelete={!disabled && handleDelete}
      deleteIcon={<SettingsBackupRestore style={{ color }}/>}
      variant="outlined"
    />
  );
}

AttributeControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttributeControl);
