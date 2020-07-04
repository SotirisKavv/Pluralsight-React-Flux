import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <p>
        Page not Found!<br/>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
