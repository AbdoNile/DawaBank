import React from 'react';
import _ from 'lodash';
import authService from './authService';
import { Redirect } from 'react-router';
class LoginCallBack extends React.Component {

    componentWillMount = () => {
        var hash = this.props.location.hash;
        var variables = _.chain(hash)
            .replace('#', '') // a=b454&c=dhjjh&f=g6hksdfjlksd
            .split('&') // ["a=b454","c=dhjjh","f=g6hksdfjlksd"]
            .map(_.partial(_.split, _, '=', 2)) // [["a","b454"],["c","dhjjh"],["f","g6hksdfjlksd"]]
            .fromPairs() // {"a":"b454","c":"dhjjh","f":"g6hksdfjlksd"}
            .value();

        var id_token =variables["id_token"];
        authService.setToken(id_token);

    }

    render() {
        return <Redirect to="/home" ></Redirect>
    }


}

export default LoginCallBack;
