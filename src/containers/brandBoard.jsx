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
    overflowX: 'auto',
  },
});

function brandBoard(props) {
  const { classes, gears, translate } = props;
  const brandList = [];
  Object.keys(gears).forEach((key) => {
    if (gears[key] && gears[key].brand) {
      const obj = brandList.find(element => element.name === gears[key].brand);
      if (obj) {
        obj.count += 1;
      } else {
        brandList.push({ name: gears[key].brand, count: 1 });
      }
    }
  });
  brandList.sort((a, b) => ((a.count < b.count) ? 1 : -1));

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Bonus1</TableCell>
            <TableCell>Bonus2</TableCell>
            <TableCell>Bonus3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brandList.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell style={{ color: 'blue' }}>{translate('brands', row.name).bonuses[0]}</TableCell>
              <TableCell style={{ color: (row.count > 1 ? 'blue' : '') }}>{translate('brands', row.name).bonuses[1]}</TableCell>
              <TableCell style={{ color: (row.count > 2 ? 'blue' : '') }}>{translate('brands', row.name).bonuses[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

brandBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(brandBoard);
