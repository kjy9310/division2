import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import GearDialog from './gearDialog'
import AttributeControl from '../components/attributeControl'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  card: {
    // minWidth: 100,
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expand: {
    margin: 'auto',
  },
}

function GearCard(props) {
  const {
    classes,
    contents,
    gearData,
    gear,
    typeName,
    setGear,
    translate,
  } = props
  
  const [expanded, setExpanded] = useState(false) 
  
  const handlingGearChange = gearInfo => {
    setGear(typeName, gearInfo)
    setExpanded(false)
  }
  const showTalentList = () => {
    if (!gear || !gear[typeName].talents) {
      return ''
    }
    const bull = <span className={classes.bullet}>•</span>
    return gear[typeName].talents.map(element => {
      const translatedObject = translate('talents', element)
      return (
        <>
          <Chip
            label={translatedObject.name}
            className={classes.chip}
            variant="outlined"
          />
          <Typography className={classes.pos} color="textSecondary">
            {translatedObject.description}
            <br />
            <span style={{ color: '#ff6a1382' }}>
              {bull}
              {translatedObject.requirement && translatedObject.requirement}
            </span>
          </Typography>
        </>
      )
    })
  }
  return (
    <Grid item xs={expanded?12:6} style={{ padding: '4px' }}>
    <Card className={expanded?classes.expandedCard: classes.card}>
      <CardContent style={{ padding: 0 }}>
        <Grid container style={{ margin: 0, padding: 0 }}>
          <Grid item xs={12} style={{ marginTop: '10px' }}>
            <Typography variant="h5" className={classes.title} gutterBottom>
              {translate('general', typeName)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              {gear && gear[typeName].name
                ? translate('gears', gear[typeName].name).name
                : ''}
            </Typography>
            <Typography color="textSecondary">
              {gear && gear[typeName].brand
                ? translate('brands', gear[typeName].brand).name
                : ''}
            </Typography>
            {showTalentList()}
            <Typography component="p">{contents}</Typography>
          </Grid>
          <Grid item xs={4}>
            <AttributeControl
              typeName="Offensive"
              value={
                gear[typeName].attribute && gear[typeName].attribute.Offensive
              }
            />
          </Grid>
          <Grid item xs={4}>
            <AttributeControl
              typeName="Defensive"
              value={
                gear[typeName].attribute && gear[typeName].attribute.Defensive
              }
            />
          </Grid>
          <Grid item xs={4}>
            <AttributeControl
              typeName="Utility"
              value={
                gear[typeName].attribute && gear[typeName].attribute.Utility
              }
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={()=>{setExpanded(!expanded)}}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <GearDialog
          translate={translate}
          typeName={typeName}
          gearChange={handlingGearChange}
          gearData={gearData[typeName]}
          gear={gear}
        />  
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  )
}

GearCard.propTypes = {
  classes: PropTypes.object.isRequired,
  gearData: PropTypes.object.isRequired,
}

export default withStyles(styles)(GearCard)
