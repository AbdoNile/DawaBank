import React from 'react';
import LocationPicker from '../../../generic/google/locationPicker';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';
import Validated from '../../../utility/Validation/validated'

class SelectLocation extends React.Component {



  containerElement = <div style={{ height: "100%" }} />;
  loadingElement = <div style={{ height: "100%" }}> <p>Loading map</p></div>;

  onCoordinatePicked = (pins) => {

    var locations = pins.map((googleLocation, index) => {
      return {
        key: googleLocation.google_address_id,
        position: googleLocation.position,
        fullAddress: googleLocation.title
      };
    })

    this.props.onChange({ "coords": locations });
  }


  render() {
    var validationContext = this.props.validationContext || {};

    const location = this.props.initialData || {};
    return <div className="row same_height">
      <div className="col-lg-4 col-xs-12">
        <div className="form-horizontal" >
          <LabelWrapper wrapperClass="col-sm-12" labelText="Name" controlId="name" >
            <Validated context={validationContext["name"]}>
              <input className="form-control input-sm" type="text"
                id="name" value={location.name}
                onChange={(e) => this.props.onChange({ "name": e.target.value })} />
            </Validated>
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Telephone" controlId="phone" >
            <Validated context={validationContext["phone"]}>
              <input className="form-control input-sm" type="phone"
                id="phone" value={location.phone}
                onChange={(e) => this.props.onChange({ "phone": e.target.value })} />
            </Validated>
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Notes" controlId="notes" >
            <Validated context={validationContext["notes"]}>
              <input className="form-control input-sm" type="text"
                id="notes" value={location.notes}
                onChange={(e) => this.props.onChange({ "notes": e.target.value })} />
            </Validated>
          </LabelWrapper>
        </div>
      </div>
      <div className="col-lg-8 col-xs-12">
        <LocationPicker value={location.coords} containerElement={this.containerElement}
          mapElement={this.loadingElement}
          singleLocation onChange={(e) => this.onCoordinatePicked(e.target.value)} searchBox={this.searchBoxElement} />
      </div>
    </div>;
  }

}

export default SelectLocation;
