import React from 'react';
import authService from '../../security/authService';

class Login extends React.Component {
 
  render() {
     return <pre>{JSON.stringify(authService.getProfile(),null , 2)}</pre>
  }

 

  
}



export default Login;
