import React from 'react';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Launch from '@material-ui/icons/Launch';
import { Link } from 'react-router-dom';

import { DASHBOARD } from '../Routes/routes';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'dodgerblue',
    display: 'flex',
    alignItems: 'center',
  },
}));

const ProductsTable = props => {
  const classes = useStyles();
  const { products } = props;

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Model</TableCell>
              <TableCell>Product Category</TableCell>
              <TableCell>Number of Products</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.length > 0 ? (
              products.map(product => (
                <TableRow key={product.id}>
                  <TableCell>
                    {Moment(product.createdAt.toDate()).format('Do MMMM YY')}
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`${DASHBOARD}/${product.name}/${product.id}`}
                      className={classes.link}
                    >
                      <Launch />
                      {product.name}
                    </Link>
                  </TableCell>
                  <TableCell>{product.model}</TableCell>
                  <TableCell>
                    <Link
                      to={`${DASHBOARD}/${product.category}`}
                      className={classes.link}
                    >
                      <Launch />
                      {product.category}
                    </Link>
                  </TableCell>
                  <TableCell>{product.serials.length}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>There are no Recent Items</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
};

export default ProductsTable;
