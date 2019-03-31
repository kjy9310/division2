import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GearDialog from './gearDialog';

const styles = {
  card: {
    minWidth: 150,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    color: '#ff6a13',
  },
  pos: {
    marginBottom: 12,
  },
};

function GearCard(props) {
  const {
    classes, title, contents, gearData, gear, typeName, setGear, translate,
  } = props;
  const handlingGearChange = (gearInfo) => {
    setGear(typeName, gearInfo);
  };
  const showTalentList = () => {
    if (!gear || !gear[typeName].talents) {
      return '';
    }
    const bull = <span className={classes.bullet}>•</span>;
    return gear[typeName].talents.map((element) => {
      const translatedObject = translate('talents', element);
      return (
        <>
          <Chip label={translatedObject.name} className={classes.chip} variant="outlined" />
          <Typography className={classes.pos} color="textSecondary">
            {bull}{translatedObject.description}
          </Typography>
        </>
      );
    });
  };
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography color="textSecondary">
          {gear && gear[typeName].brand ? translate('brands', gear[typeName].brand).name : ''}
        </Typography>
          {showTalentList()}
        <Typography component="p">
          {contents}
        </Typography>
      </CardContent>
      <CardActions>
        <GearDialog translate={translate} gearChange={handlingGearChange} gearData={gearData[typeName]} gear={gear}/>
      </CardActions>
    </Card>
  );
}

GearCard.propTypes = {
  classes: PropTypes.object.isRequired,
  gearData: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearCard);
