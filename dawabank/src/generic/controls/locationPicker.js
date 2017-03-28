import React from 'react';
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";
import {GoogleMap, Marker, SearchBox} from "react-google-maps";
import baseControl from '../baseControl';

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

  extractCurrentValue = (event) => {
        return this.state.pins;
  }

  onMapMounted = (map) => {
    if(map == null) return;
    this._map = map.props.map;
  }

  handleMapClick = (event) => {
    var newPin =  { position:  event.latLng.toJSON()   };
    if(this.props.singleLocation || true){
        var pins = [newPin];
    }
    
    this.setState({pins : pins});
    this.handleChange(event)
  }

  onSearchBoxMounted = (searchBox) => {
    this._searchBox = searchBox;
  }


   onPlacesChanged = () => {
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const pins = places.map(place => ({
      position: place.geometry.location.toJSON() ,
    }));

    // Set markers; set map center to first search result
    const mapCenter = pins.length > 0 ? pins[0].position : SiteSettings.map.defaultCentre;
    this._map.setCenter(mapCenter);
    this._map.setZoom(13)
    this.setState({pins : pins});
  }

   pinToMarker = (pin) => {
    return {
          position: pin.position,
          animation: 2,
          draggable: true,
          onDragend : this.handleMapClick
      }
  }

  render() {
   var markers = this.state.pins == null ? [] : this.state.pins.map((pin, index)=> {
      return this.pinToMarker(pin);
   });
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
            onClick={this.handleMapClick} >
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
