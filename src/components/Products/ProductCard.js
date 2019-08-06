import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { removeProduct, updateProduct } from '../../actions/product';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: '#3f51b5',
  },
}));

const ProductCard = props => {
  const { product } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <Link className={classes.link} to={`${product.category}/${product.id}`}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Number of Products: {product.serials.length}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Model: {product.model}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Category: {product.category}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Created At:
                {moment(product.createdAt.toDate()).format(
                  'dddd, MMMM Do YYYY, h:mm a',
                )}
              </Typography>
              {product.updatedAt && (
                <Typography variant="body2" color="textSecondary" component="p">
                  Updated At:
                  {moment(product.updatedAt.toDate()).format(
                    'dddd, MMMM Do YYYY, h:mm a',
                  )}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </React.Fragment>
  );
};

export default connect(
  null,
  { removeProduct, updateProduct },
)(ProductCard);
