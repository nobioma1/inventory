import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SerialsList = ({ serials }) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Product Serials</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {serials.map((serial, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {serial}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SerialsList;
