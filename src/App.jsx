import React, { Suspense, lazy } from 'react';

const AxiosData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/AxiosData'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div data-testid="app">
      <h1>Axios Data Fetch</h1>
      <ErrorBoundary>
        <Suspense fallback={<div data-testid="loading-component">Loading component...</div>}>
          <AxiosData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
