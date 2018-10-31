import React from 'react';
import AuthService from './authService';
class ProtectedRoute extends React.Component {
 
    componentWillMount = () => {
        if (!AuthService.isLoggedIn()) {
            AuthService.redirectToLoginPage();
        }
    }
}

class RequireLogin extends React.Component {
    
    render(){
        if(AuthService.isLoggedIn()){
            return this.props.children ;
        }
        else{
            return null;
        }
    }
}


export {ProtectedRoute, RequireLogin};
