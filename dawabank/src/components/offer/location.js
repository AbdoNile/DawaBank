import React from 'react';
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";
import {GoogleMap, Marker} from "react-google-maps";
import _ from 'lodash';

import SiteSettings from '../../settings/siteSettings';

class Location extends React.Component {
  constructor(props) {
    super(props);
        this.state = { 
             markers: [{
            position: {
                lat: 25.0112183,
                lng: 121.52067570000001,
            },
            key: "Taiwan",
            defaultAnimation: 2
            }]
        };

        
  }

    
  

  render() {
   return  <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{v:"3.exp",libraries:"geometry,drawing,places",key:SiteSettings.googleApiKey}}
        loadingElement={
          <div  style={{ height: "100%" }}>
            <p>Loading map</p>
          </div>
        }
        containerElement={
          <div  style={{ height: "100%"  }} />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}
            onClick={this.handleMapClick} >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  />
              );
            })}
          </GoogleMap>
        }
      />

    ;
  }
}

export default Location;
