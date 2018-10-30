import React from 'react';
import _ from 'lodash';
import authService from './authService';
class LoginCallBack extends React.Component {
    constructor() {
        super();

    }

    componentWillMount = () => {
            var hash = this.props.location.hash;
            var id_token = _.replace(hash, '#id_token=', '');
            authService.setToken(id_token);
       
    }





}

export default LoginCallBack;
