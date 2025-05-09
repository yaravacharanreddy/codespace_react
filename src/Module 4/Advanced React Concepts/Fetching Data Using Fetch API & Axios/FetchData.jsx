import React, { useEffect, useState, useMemo } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    setStatus('loading');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((json) => {
        setData(json);
        setStatus('success');
      })
      .catch((err) => {
        setError(err.message);
        setStatus('error');
      });
  }, []);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  }, [data, page]);

  if (status === 'loading') return <p data-testid="loading">Loading...</p>;
  if (status === 'error') return <p data-testid="error">Error: {error}</p>;

  return (
    <div data-testid="post-list">
      <h2>Fetched Posts</h2>
      <ul>
        {paginatedData.map((item) => (
          <li key={item.id} data-testid={`post-${item.id}`}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
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
        <span data-testid="page"> Page {page} </span>
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

export default FetchData;
