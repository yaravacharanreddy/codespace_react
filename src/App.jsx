import React, { Suspense, lazy } from 'react';

const ParentComponent = lazy(() => import('./Module 4/Advanced React Concepts/Optimizing Performance with React Memoization/ParentComponent'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2 data-testid="app-error">An error occurred while loading the component.</h2>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div data-testid="app-container">
      <h1>React.memo Optimization</h1>
      <ErrorBoundary>
        <Suspense fallback={<p data-testid="loading">Loading...</p>}>
          <ParentComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
