/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from "react-redux"
import store from './Redux/store';
import PageTodos from './Pages/todos';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.root}>
        <PageTodos />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
});

export default App;
