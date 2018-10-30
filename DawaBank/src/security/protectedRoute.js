import React from 'react';
import AuthService from './authService';
class ProtectedRoute extends React.Component {
    constructor() {
        super();

    }

    componentWillMount = () => {
        if (!AuthService.isLoggedIn()) {
            window.alert('New URL  ' + this.props.location.pathname);
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
