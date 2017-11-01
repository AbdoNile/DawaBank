import React from 'react';
import {render} from 'react-dom';
import RouteMap from './routeMap';
import {withScriptjs} from "react-google-maps"
import { compose, withProps } from "recompose"
import SiteSettings from 'settings/siteSettings';

//Import CSS
import './sass/app.css'


class App extends React.Component {
    googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="
    + SiteSettings.map.googleApiKey + "&language="+SiteSettings.map.language;
  
    render () {
       const MyMapComponent = withScriptjs((props) => <RouteMap /> );
       var googleMapURL = this.googleMapURL;
       var loadingElement = <div style={{ height: "100%" }} />;
       
     return <MyMapComponent googleMapURL={googleMapURL} loadingElement={loadingElement} /> ;
    }
}
export default App;
render( <App />, document.getElementById( 'root' ) );