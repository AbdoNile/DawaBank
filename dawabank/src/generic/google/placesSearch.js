import React from 'react';
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
class PlacesSearch extends React.Component {
  constructor(props) {
    super(props);
    this.refs = null;
    this.onSearchBoxMounted = this.onSearchBoxMounted.bind(this);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  onSearchBoxMounted = (ref) => {
    this.refs = ref;
  }

  onPlacesChanged = () => {
    const places = this.refs.getPlaces();
    this.props.onChange(this.extractCurrentValue( places ));
  }

  extractCurrentValue = (event) => {
    var place = event[0]
    var result = {
      position: place.geometry.location,
      title: place.formatted_address,
      google_address_id: place.place_id
    }
    return result;
  }

  render() {
    return (

      <StandaloneSearchBox
        ref={this.onSearchBoxMounted}
        bounds={this.props.bounds}
        onPlacesChanged={this.onPlacesChanged}     >
        {this.props.children}
      </StandaloneSearchBox>

    );
  }
}

export default PlacesSearch;