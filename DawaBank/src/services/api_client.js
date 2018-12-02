import axios from 'axios';
import SiteSettings from '../settings/siteSettings';
import authService from '../security/authService';


export default axios.create({
    baseURL: SiteSettings.api.address,
    headers: {'Authorization': "bearer " + authService.getToken()} 
  
});