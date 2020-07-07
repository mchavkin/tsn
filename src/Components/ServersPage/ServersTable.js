import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  tableHead: {
    backgroundColor: '#f5f5f5',
  },
}));

function ServersTable({ servers }) {
  const classes = useStyle();
  return (
    <Table>
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell align="left">SERVER</TableCell>
          <TableCell align="right">DISTANCE</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {servers.map((row) => (
          <TableRow key={row.name + row.distance}>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="right">
              {`${row.distance} km`}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const mapStateToProps = (state) => ({ servers: state.servers });

export default connect(mapStateToProps)(ServersTable);
