export const setAuthToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return {};
  };


  