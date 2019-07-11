export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const GET_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';

export const ERROR = 'ERROR';

export const createProduct = product => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    firestore
      .collection('products')
      .add({
        ...product,
        userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_PRODUCT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const removeProduct = id => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('products')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_PRODUCT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const updateProduct = (id, product) => {
  console.log(product)
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('products')
      .doc(id)
      .set({
        ...product,
      })
      .then(() => {
        dispatch({ type: UPDATE_PRODUCT_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// export const getProduct = id => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection('products')
//       .doc(id)
//       .get()
//       .then(doc => {
//         if (doc.exists) {
//           dispatch({ type: GET_PRODUCT_SUCCESS, payload: doc.data() });
//         }
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };
