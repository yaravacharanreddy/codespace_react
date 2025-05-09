import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

const AxiosData = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [retry, setRetry] = useState(0);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    setStatus('loading');
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setStatus('success');
      })
      .catch((err) => {
        setError(`Failed to fetch data. ${err.message}`);
        setStatus('error');
      });
  }, [retry]);

  const handleRetry = () => {
    setRetry((prev) => prev + 1);
  };

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  }, [data, page]);

  if (status === 'loading') return <p data-testid="loading">Loading...</p>;
  if (status === 'error') {
    return (
      <div data-testid="error">
        <p>{error}</p>
        <button onClick={handleRetry} data-testid="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <div data-testid="axios-data">
      <h2>Posts</h2>
      <ul>
        {paginatedData.map((post) => (
          <li key={post.id} data-testid={`post-${post.id}`}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          data-testid="prev-button"
        >
          Previous
        </button>
        <span data-testid="page">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * ITEMS_PER_PAGE >= data.length}
          data-testid="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AxiosData;
