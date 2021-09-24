import {createStore} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['UserReducer'],
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(persistedReducer);

const persitor = persistStore(store);

export {store, persitor};
