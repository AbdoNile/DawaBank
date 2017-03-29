import React from 'react';
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";
import {GoogleMap, Marker, SearchBox} from "react-google-maps";
import baseControl from '../baseControl';
import _ from 'lodash';

import SiteSettings from '../../settings/siteSettings';

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `27px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

class LocationPicker extends baseControl {
 constructor(props) {
    super(props);
    this.onPlacesChanged =  this.onPlacesChanged.bind(this); 
  }

  
  onMapMounted = (map) => {
    if(map == null) return;
    this._map = map.props.map;
  }

    onPinPlaced = (event) => {
      if(this.props.readOnly) {
       return;
     }
    
    var newPin =  { position:  event.latLng.toJSON()   };
    if(this.props.singleLocation || true){
        var pins = [newPin];
    }
    
    this.handleChange({target : { value :pins }});
  }

  onSearchBoxMounted = (searchBox) => {
    this._searchBox = searchBox;
  }


   onPlacesChanged = () => {
     
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const pins = places.map(place =>  ({latLng : place.geometry.location }));

    // Set markers; set map center to first search result
    const mapCenter = pins.length > 0 ? pins[0].latLng : SiteSettings.map.defaultCentre;
    this._map.setCenter(mapCenter);
    this._map.setZoom(13)

    pins.map( pin => this.onPinPlaced(pin));
    
  }

   pinToMarker = (pin) => {
    return {
          position: pin.position,
          animation: 2,
          draggable: true,
          onDragend : this.onPinPlaced
      }
  }

  render() {
   var markers = _.isArray(this.state.boundValue)  ?  this.state.boundValue.map((pin, index)=> {
      return this.pinToMarker(pin);
   }) : [];
   let markerTags = markers.map((marker, index) => {
              return (
                <Marker {...marker} />
              );
            });
            
   return   <ScriptjsLoader
        hostname={"maps.googleapis.com"}
        pathname={"/maps/api/js"}
        query={{v:"3.exp",libraries:"geometry,drawing,places",key:SiteSettings.map.googleApiKey,language:SiteSettings.map.language}}
        loadingElement={this.props.loadingElement}
        containerElement={this.props.containerElement}
        googleMapElement={
          <GoogleMap
            defaultZoom={SiteSettings.map.defaultZoom}
            defaultCenter={SiteSettings.map.defaultCentre}
            ref={this.onMapMounted}
            onClick={this.onPinPlaced} >
             {markerTags}

            <SearchBox
                controlPosition={2}
                inputPlaceholder="Customized your placeholder"
                inputStyle={INPUT_STYLE}
                ref={this.onSearchBoxMounted}
                onPlacesChanged={this.onPlacesChanged}
              />
          </GoogleMap>
        }
      />;
  }
}

export default LocationPicker;
