export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const GET_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const REMOVE_CATEGORY_SUCCESS = 'REMOVE_CATEGORY_SUCCESS';
export const START_PRODUCT_ACTION = 'START_PRODUCT_ACTION';

export const ERROR = 'ERROR';

export const createProduct = product => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_PRODUCT_ACTION });
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    return firestore
      .collection('products')
      .add({
        ...product,
        userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_PRODUCT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const removeProduct = id => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_PRODUCT_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('products')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_PRODUCT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const updateProduct = (id, product) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_PRODUCT_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('products')
      .doc(id)
      .set({
        ...product,
      })
      .then(() => {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};

export const removeCategory = category => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: START_PRODUCT_ACTION });
    const firestore = getFirestore();
    return firestore
      .collection('products')
      .where('category', '==', category)
      .get()
      .then(querySnapshot => {
        let batch = firestore.batch();
        querySnapshot.forEach(doc => {
          batch.delete(doc.ref);
        });
        return batch.commit();
      })
      .then(() => {
        dispatch({ type: REMOVE_CATEGORY_SUCCESS });
        return true;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err.message });
      });
  };
};
