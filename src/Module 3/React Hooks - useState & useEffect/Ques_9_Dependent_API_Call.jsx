// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call
import React, { useState, useEffect } from 'react';

const DependentAPICall = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
        .then(res => res.json())
        .then(data => setPosts(data));
    }
  }, [selectedUserId]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setSelectedUserId(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUserId && (
        <div>
          <h3>Posts by User {selectedUserId}</h3>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DependentAPICall;
