import React from 'react'

function AuthTokenSet() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return {};
}

export default AuthTokenSet