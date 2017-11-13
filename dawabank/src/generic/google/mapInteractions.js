/* eslint-disable no-undef */
import React from 'react';
import {Marker ,GoogleMap } from "react-google-maps";
import SiteSettings from 'settings/siteSettings';

import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import baseControl from '../baseControl';
import _ from 'lodash';



class MapInteractions extends baseControl {
 constructor(props) {
    super(props);
    this.onPlaceSelected =  this.onPlaceSelected.bind(this); 
    this.onPinPlaced =  this.onPinPlaced.bind(this); 
    this.mapInitialized = this.mapInitialized.bind(this);
    this.adjustView = this.adjustView.bind(this);
    this.state = {
      zoom : SiteSettings.map.defaultZoom,
      center : SiteSettings.map.defaultCentre
    };

   }

    mapInitialized =  (ref) => {
      if(ref == null) return;
      this._map = ref;
    }

    adjustView = (zoomLevel, mapCenter) => {
      this.setState({center : mapCenter , zoom : zoomLevel})
    }

 
  onPinPlaced = (event) => {
  
    //if read only event.. just ignore
    if(this.props.readOnly) {
       return;
     }

    var newPin = {};
    var handleChange = this.handleChange;
    var singleLocation = this.props.singleLocation;
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
          if(singleLocation){
                var pins = [newPin];
          }

          handleChange({target : { value :pins }});
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
    this.adjustView(13, mapCenter);
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
    return    <GoogleMap
    ref= {this.mapInitialized} onClick={this.onPinPlaced}
    defaultZoom={SiteSettings.map.defaultZoom}
    defaultCenter={SiteSettings.map.defaultCentre} 
    center={this.state.center} zoom={this.state.zoom} >
        {(this.props.readOnly != true && 
          <SearchBox
            ref={this.searchBoxInitialized} controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={this.onPlaceSelected} >
                      <div className="form-group">
                      <label>Address</label>
                      <div className="row">
                        <div className="col-sm-12 search_input">
                          <input type="text" className="form-control" placeholder="Search for address" />
                        </div>
                      </div>
                    </div>
        </SearchBox>  )}
        {markerTags}
    </GoogleMap>
  ;
  
  
     
  }
}

export default MapInteractions;
