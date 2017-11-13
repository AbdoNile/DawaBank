import React, { Component } from 'react';
import { withGoogleMap} from "react-google-maps"
import MapInteractions from './mapInteractions';
class LocationPicker extends Component {
    constructor(props){
        super(props);
    }

  


    render(){
        const Tag = withGoogleMap((props) => (
               <MapInteractions adjustView={this.adjustView} {...this.props}/>
        ));
        return  <Tag {...this.props } />
  }
}

export default LocationPicker;