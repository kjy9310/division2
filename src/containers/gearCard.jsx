import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
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
    fontSize: 14,
    color: '#ff6a13',
  },
  pos: {
    marginBottom: 12,
  },
};

function GearCard(props) {
  const {
    classes, title, contents, gearData, gear, typeName,
  } = props;
  console.log(typeName)
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {bull}{title}
        </Typography>
        <Typography variant="h5" component="h2">
          {gear&&gear.mask[0]}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">

        </Typography>
        <Typography component="p">
          {contents}
        </Typography>
      </CardContent>
      <CardActions>
        <GearDialog gearData={gearData[typeName]} gear={gear}/>
      </CardActions>
    </Card>
  );
}

GearCard.propTypes = {
  classes: PropTypes.object.isRequired,
  gearData: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearCard);
