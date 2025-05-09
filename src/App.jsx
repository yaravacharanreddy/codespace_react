import React, { Suspense, lazy } from 'react';

const FetchData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData'));

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
      return <h2>Something went wrong while loading the component.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div className="App" data-testid="app">
      <h1>Fetch API Example</h1>
      <ErrorBoundary>
        <Suspense fallback={<div data-testid="fallback">Loading component...</div>}>
          <FetchData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
