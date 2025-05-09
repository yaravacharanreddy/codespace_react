import React, { Suspense, lazy } from 'react';

const FetchData = lazy(() => import('./Module 4/Advanced React Concepts/Fetching Data Using Fetch API & Axios/FetchData'));

function App() {
  return (
    <div className="App">
      <h1>Fetch API Example</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
}

export default App;
