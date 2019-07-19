import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { removeProduct, updateProduct } from '../../actions/product';
import { DASHBOARD } from '../Routes/routes';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(1),
  },
}));

const ProductCard = props => {
  const { product, removeProduct, history } = props;
  const classes = useStyles();

  const removeHandler = id => {
    removeProduct(id).then(res => {
      if (res) {
        history.push(`${DASHBOARD}/${product.category}`);
      }
    });
  };

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Serial: {product.serial}
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
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              history.push(`${DASHBOARD}/${product.category}/${product.id}`)
            }
          >
            Edit
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => removeHandler(product.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default connect(
  null,
  { removeProduct, updateProduct },
)(ProductCard);
