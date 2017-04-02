/* eslint-disable no-undef */
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
  width: `400px`,
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
    this.onPlaceSelected =  this.onPlaceSelected.bind(this); 
    this.onPinPlaced =  this.onPinPlaced.bind(this); 
  }

  
  onMapMounted = (map) => {
    if(map == null) return;
    this._map = map.props.map;
  }

  onPinPlaced = (event) => {
  
    if(this.props.readOnly) {
       return;
     }

    var newPin = {};
    this.geocodePosition(event.latLng).then((geoCodingResult) => {
        newPin =  { 
            position:  event.latLng.toJSON(),
            title : geoCodingResult.formatted_address,
            google_address_id : geoCodingResult.place_id
        };
    
      }).then(() => {
          if(this.props.singleLocation){
                var pins = [newPin];
              }

            this.handleChange({target : { value :pins }});
      });
  }

  onSearchBoxMounted = (searchBox) => {
    this._searchBox = searchBox;
  }


  onPlaceSelected = () => {
     
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

  geocodePosition = (pos) => {
    var geocoder = new google.maps.Geocoder();
    
      var promise = new Promise(function(resolve , reject){
          geocoder.geocode({
                latLng: pos
              },
              function(responses) {
                if (responses && responses.length > 0) {
                  resolve(responses[0]);
                } else {
                  reject("");
                }
              });
      });
      
      return promise;
  }
  

  render() {
   var pins = this.props.readOnly ? this.props.boundValue : this.state.boundValue;

   
    var markers = _.isArray(pins)  ?  pins.map((pin, index)=> {
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
                onPlacesChanged={this.onPlaceSelected}
              />
          </GoogleMap>
        }
      />;
  }
}

export default LocationPicker;
