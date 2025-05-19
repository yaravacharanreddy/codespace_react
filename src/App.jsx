import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todos from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Todos />
    </div>
  </Provider>
);

export default App;
