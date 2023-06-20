import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div>
      <h1>Welcome to the Second Page</h1>
      <p>This is some content on the second page.</p>
      <Link to="/">Go back to Home Page</Link>
    </div>
  );
}

export default SecondPage;