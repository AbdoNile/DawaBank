/* eslint-disable no-undef */
import React from 'react';
import {GoogleMap, Marker,   withGoogleMap} from "react-google-maps"
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

import baseControl from '../../baseControl';
import _ from 'lodash';

import SiteSettings from 'settings/siteSettings';

class LocationPicker extends baseControl {
 constructor(props) {
    super(props);
    this.onPlaceSelected =  this.onPlaceSelected.bind(this); 
    this.onPinPlaced =  this.onPinPlaced.bind(this); 
  }

 

  mapInitialized = (mapRef) => {
    if(mapRef == null) return;
    this._map = mapRef.props.map;
  }

  onPinPlaced = (event) => {
  
    //if read only event.. just ignore
    if(this.props.readOnly) {
       return;
     }

    var newPin = {};
    this.geocodePosition(event.latLng).then((geoCodingResults) => {
        var geoCodingResult = geoCodingResults[0];
        newPin =  { 
            key : "_new_pin",
            position:  event.latLng.toJSON(),
            title : geoCodingResult.formatted_address,
            google_address_id : geoCodingResult.place_id
        };
    
      })
      .then(() => {
          if(this.props.singleLocation){
                var pins = [newPin];
          }

          this.handleChange({target : { value :pins }});
      });
  }

  searchBoxInitialized = (searchBox) => {
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
    if(pin == null) 
      return ;
    return {
          position: pin.position,
          key : pin.key,
          animation: 2,
          draggable: !this.props.readOnly,
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
                  resolve(responses);
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

    const  MapComponent =    withGoogleMap ((props) =>  <GoogleMap
    defaultZoom={SiteSettings.map.defaultZoom}
    defaultCenter={SiteSettings.map.defaultCentre}
    ref={this.mapInitialized}
    onClick={this.onPinPlaced} >
    <SearchBox
      ref={this.searchBoxInitialized}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={this.onPlaceSelected}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
      {props.markerTags}

    </GoogleMap>
      );

return <MapComponent   
          mapElement={this.props.containerElement}
         containerElement={this.props.containerElement}
          markerTags={markerTags} /> ;
     
  
     
  }
}

export default LocationPicker;
