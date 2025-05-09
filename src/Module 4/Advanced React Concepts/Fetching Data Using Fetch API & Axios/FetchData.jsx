import React, { useEffect, useState, useMemo } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
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

  const renderedList = useMemo(() => {
    return data.slice(0, 10).map((item) => (
      <li key={item.id}>
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </li>
    ));
  }, [data]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error}</p>;

  return (
    <div data-testid="post-list">
      <h2>Fetched Posts</h2>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default FetchData;
