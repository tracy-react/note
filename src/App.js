/**
 * @flow
 */
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends Component<{}> {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDmS-TtN0bEjZH_OL1gVmFg8xcETxk1lxY',
      authDomain: 'notes-6a0f0.firebaseapp.com',
      databaseURL: 'https://notes-6a0f0.firebaseio.com',
      projectId: 'notes-6a0f0',
      storageBucket: '',
      messagingSenderId: '459201907872'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hi!</Text>
        </View>
      </Provider>
    );
  }
}

