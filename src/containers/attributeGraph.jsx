import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
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
        attributeList[attributeKey] += gears[key].attribute[attributeKey];
      });
    }
  });
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(attributeList).map(key => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {key} : {attributeList[key]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

AttributeGraph.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttributeGraph);
