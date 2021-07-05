import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Header />
    <TodoList />
    <Footer />
  </Provider>
);

export default App;
