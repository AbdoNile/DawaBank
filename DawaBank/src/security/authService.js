import decode from 'jwt-decode';
import SiteSettings from '../settings/siteSettings';
class AuthService {
    // Initializing important variables
    constructor(domain) {
         this.getProfile = this.getProfile.bind(this)
    }

    redirectToLoginPage() {
        // Get a token from api server using the fetch api
        var callbackUrl =  window.location.origin + "/login-call-back";
        window.location.href = SiteSettings.authentication.cognito.login_page + callbackUrl
    }

    isLoggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }
}
var authService = new AuthService();
export default authService;