import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/user')
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
        </div>
      ) : (
        <button onClick={() => window.location.href='/oauth2/authorization/google'}>Login with Google</button>
      )}
    </div>
  );
};

export default Auth;
