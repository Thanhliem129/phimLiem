import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import redux from './redux/index';
import FlashMessage from "react-native-flash-message";
import AuthStack from './routes/authStack';

const App = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <AuthStack/>
        <FlashMessage position="top"/>
      </PersistGate>
    </Provider>
  )
}

export default App