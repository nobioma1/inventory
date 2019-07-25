import React, { useState } from 'react';
import { connect } from 'react-redux';
import Fuse from 'fuse.js';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Title from '../Title';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
}));

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();
  const fuseOptions = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 50,
    maxPatternLength: 12,
    minMatchCharLength: 3,
    keys: ['name', 'category', 'serial', 'model'],
  };

  const fuse = new Fuse(products, fuseOptions);
  const data = searchTerm ? fuse.search(searchTerm).reverse() : [];

  return (
    <Container component="main" maxWidth="md">
      <Title title="Search Inventory" />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="searchTerm"
        label="Search"
        name="searchTerm"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Box display="flex" flexwrap="wrap">
      {data.length > 0 ? (
        data.map(product => {
          return (
            <Card key={product.id} className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Serial: {product.serial}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Model: {product.model}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Category: {product.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Created At:
                    {moment(product.createdAt.toDate()).format(
                      'dddd, MMMM Do YYYY, h:mm a',
                    )}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })
      ) : (
        <Typography variant="body2" color="textSecondary" component="p">
          Enter a search (product name, serial, model, category)
        </Typography>
      )}
      </Box>
    </Container>
  );
};

const mapStateToProps = ({
  firestore: {
    ordered: { products },
  },
}) => ({ products });

export default connect(
  mapStateToProps,
  {},
)(Search);
