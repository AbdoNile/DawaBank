import axios from 'axios';
import SiteSettings from '../settings/siteSettings';
import authService from '../security/authService';
import {dialog} from '../utility/dialogs';
let instance = axios.create({
    baseURL: SiteSettings.api.address,
    headers: { 'Authorization': "bearer " + authService.getToken() },
});

instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
}
);


instance.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response;
    }
    else if (response.status === 401) {
        authService.redirectToLoginPage();
    }
    else {
        alert(response.status);
    }
},  function (error) {
    // Do something with response error
    dialog.alert();
    return Promise.reject(error);
  });

export default instance

