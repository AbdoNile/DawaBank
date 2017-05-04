import React from 'react';

import SiteSettings from '../../settings/siteSettings';
import scriptLoader from 'react-async-script-loader';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.readProfileData = this.readProfileData.bind(this);
    this.init = this.init.bind(this);
  }

  render() {
    const loginButton = this.state && this.state.profile ? null :   <div ref={(_ref) => this.loginButton = _ref} >
          <a className="btn btn-block btn-social btn-google">
            <span className="fa fa-google"></span> Sign in with Google
          </a>
      </div>;

    const welcome = (this.state && this.state.profile && <div><p>{this.state.profile.full_name}</p></div>);

    return <div>
        {loginButton}
        {welcome}
    </div>;
  }

  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
      if (isScriptLoadSucceed) {
        this.gapi = window.gapi;
        this.init()
      }
      else this.props.onError()
    }
  }

  readProfileData = (googleProfile) => {
      this.setState({ isSignedIn : true});
      var profile = {
        id : googleProfile.getId() ,
        full_name : googleProfile.getName(),
        first_name : googleProfile.getGivenName(),
        family_name : googleProfile.getFamilyName(),
        image : googleProfile.getImageUrl(),
        email : googleProfile.getEmail()
      }

      this.setState({ profile });
  }

  init = function() {
        var loginDomElement = this.loginButton;
      var gapi = this.gapi;
        var profileMaker = this.readProfileData;

        gapi.load('auth2', function(){
        
        var auth2 = gapi.auth2.init({
            client_id: SiteSettings.authentication.google.client_id,
            cookiepolicy: 'single_host_origin',
        });
        

   
        auth2.attachClickHandler(loginDomElement, {},
          function(googleUser) {
             var profile =  googleUser.getBasicProfile();
             profileMaker(profile);
          },
          function(error) {
            alert(JSON.stringify(error, undefined, 2));
          });

        if(auth2.isSignedIn.get()){
            var profile = auth2.currentUser.get();
            profileMaker(profile);
        }

    });
  }
}

const scriptsToLoad = ['https://apis.google.com/js/api:client.js'];

export default scriptLoader(scriptsToLoad)(Login);
