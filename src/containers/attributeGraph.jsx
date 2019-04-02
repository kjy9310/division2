import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AttributeControl from '../components/attributeControl';

const styles = theme => ({
  root: {
    width: '100%',
    padding: '15px 0 20px 0'
  },
});

function AttributeGraph(props) {
  const { classes, gears, translate } = props;
  const attributeList = {
    Offensive: 0,
    Defensive: 0,
    Utility: 0,
  };
  Object.keys(gears).forEach((key) => {
    if (gears[key] && gears[key].attribute) {
      Object.keys(gears[key].attribute).forEach((attributeKey) => {
        if (attributeKey in attributeList) {
          attributeList[attributeKey] += gears[key].attribute[attributeKey];
        }
      });
    }
  });
  return (
    <Paper className={classes.root}>
        {Object.keys(attributeList).map(key => (
            <AttributeControl typeName={key} value={attributeList[key]}/>
        ))}
    </Paper>
  );
}

AttributeGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttributeGraph);
