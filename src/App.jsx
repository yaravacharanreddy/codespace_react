import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import store from './store';

const Todos = lazy(() => import('./Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong loading the app.</h2>;
    }
    return this.props.children;
  }
}

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading Todos...</div>}>
        <Todos />
      </Suspense>
    </ErrorBoundary>
  </Provider>
);

export default App;
