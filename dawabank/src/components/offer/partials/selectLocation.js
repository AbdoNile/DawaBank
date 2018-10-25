import React from 'react';
import LocationPicker from 'generic/google/locationPicker';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';

class SelectLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: this.props.location };
  }

  updateStateWithValue = (field, value) => {
    this.setState({ [field]: value });
    this.props.onChange(this.state);
  }


  containerElement = <div style={{ height: "100%" }} />;
  loadingElement = <div style={{ height: "100%" }}> <p>Loading map</p></div>;

  onCoordinatePicked = (value) => {
    let googleLocation = value.pins[0];

    let location = {
      key: googleLocation.google_address_id,
      position: googleLocation.position,
      fullAddress: googleLocation.title
    };

    this.locationUpdated({ PickupLocation: location });
  }

  locationUpdated = (value) => {

    let mergedValue = Object.assign({}, this.currentValue, value.PickupLocation);
    this.currentValue = mergedValue;
    this.updateStateWithValue({ "pickupLocation": mergedValue });
  }

  componentWillReceiveProps(nextProps) {
    this.currentValue = nextProps.location;
  }

  render() {
    return <div className="row same_height">
      <div className="col-lg-4 col-xs-12">
        <div className="form-horizontal"
          boundValue={this.props.location} onChange={(event) => this.locationUpdated(event)} dataElement="PickupLocation" >
          <LabelWrapper wrapperClass="col-sm-12" labelText="Name" controlId="name" >
            <input className="form-control input-sm" type="text"
              id="name" value={this.state.name}
              onChange={(e) => this.updateStateWithValue("name", e.target.value)} />
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Telephone" controlId="phone" >
            <input className="form-control input-sm" type="phone"
              id="phone" value={this.state.phone}
              onChange={(e) => this.updateStateWithValue("phone", e.target.value)} />
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Notes" controlId="notes" >
            <input className="form-control input-sm" type="text"
              id="notes" value={this.state.notes}
              onChange={(e) => this.updateStateWithValue("notes", e.target.value)} />
          </LabelWrapper>
        </div>
      </div>
      <div className="col-lg-8 col-xs-12">
        <LocationPicker boundValue={this.props.location} containerElement={this.containerElement}
          mapElement={this.loadingElement} dataElement="pins"
          singleLocation onChange={(event) => this.onCoordinatePicked(event)} searchBox={this.searchBoxElement} />
      </div>
    </div>;
  }

}

export default SelectLocation;
