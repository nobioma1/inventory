import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

import Navigation from './Navigation';
import ProductRouter from '../Routes/ProductRouter';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Dashboard = props => {
  const classes = useStyles();
  const { products, isLoading } = props;

  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {(!products || isLoading) && <LinearProgress color="secondary" />}
        <Container maxWidth="lg" className={classes.container}>
          <ProductRouter {...props} />
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
    products: state.firestore.ordered.products,
    isLoading: state.products.isLoading,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.uid) return [];
    return [
      {
        collection: 'products',
        where: [['userId', '==', props.uid]],
      },
    ];
  }),
)(Dashboard);
