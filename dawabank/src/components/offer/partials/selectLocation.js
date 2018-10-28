import React from 'react';
import LocationPicker from 'generic/google/locationPicker';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';

class SelectLocation extends React.Component {
  
  updateStateWithValue = (field, value) => {
    this.props.onChange({ [field]: value });
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

    this.updateStateWithValue({ PickupLocation: location });
  }

  componentWillReceiveProps(nextProps) {
    this.currentValue = nextProps.location;
  }

  render() {
    const location = this.props.initialData || {};
    return <div className="row same_height">
      <div className="col-lg-4 col-xs-12">
        <div className="form-horizontal" >
          <LabelWrapper wrapperClass="col-sm-12" labelText="Name" controlId="name" >
            <input className="form-control input-sm" type="text"
              id="name" value={location.name}
              onChange={(e) => this.updateStateWithValue("name", e.target.value)} />
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Telephone" controlId="phone" >
            <input className="form-control input-sm" type="phone"
              id="phone" value={location.phone}
              onChange={(e) => this.updateStateWithValue("phone", e.target.value)} />
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Notes" controlId="notes" >
            <input className="form-control input-sm" type="text"
              id="notes" value={location.notes}
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
