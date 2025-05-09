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
    console.error('Error Boundary Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2 data-testid="fallback-error">Something went wrong while loading the component.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div data-testid="app-container">
      <h1 data-testid="app-title">Axios Data Fetch</h1>
      <ErrorBoundary>
        <Suspense fallback={<div data-testid="loading-fallback">Loading component...</div>}>
          <AxiosData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
