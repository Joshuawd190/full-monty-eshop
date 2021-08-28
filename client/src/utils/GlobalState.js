import React, { createContext, useContext } from 'react';
import { reducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

const store = configureStore({ reducer: reducer });

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
export default store;
