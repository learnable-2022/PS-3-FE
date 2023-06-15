
// export function setAuthToken () {
//     const token = localStorage.getItem('token');
//     if (token) {
//       return token;
//     }
//     return {};
//   }

  export default function AuthTokenSet(){
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return {};
  }
  
  // setAuthToken();