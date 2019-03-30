import React from 'react';
import LocationPicker from '../../../generic/google/locationPicker';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';
import Validated from '../../../utility/Validation/validated'
import { validator } from '../../../utility/Validation';
import offerService from '../../../services/offerService';

class Editor extends React.Component {

  containerElement = <div style={{ height: "100%" }} />;
  loadingElement = <div style={{ height: "100%" }}> <p>Loading map</p></div>;

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    this.setState(this.props.initialDate);
  }

  update = (field, value) => {
    this.setState({ [field]: value });
  }

  save = () => {
    let data = this.state;

    validator.validate(data, offerService.Validations.pickupLocation).then((r) => {

      this.setState({ validationResult: r });
      offerService.saveMedication(this.props.offerId, data).then(result => {
        this.props.history.push('/MyOffers');
      });
    }).catch(r => {
      this.setState({ validationResult: r });
    });
  }


  onCoordinatePicked = (pins) => {

    var locations = pins.map((googleLocation, index) => {
      return {
        key: googleLocation.google_address_id,
        position: googleLocation.position,
        fullAddress: googleLocation.title
      };
    })

    this.update({ "coords": locations });
  }

  render() {
    var validationResult = this.state.validationResult || {};

    const location = this.state.initialData || {};
    return <div className="row same_height">
      <div className="col-lg-4 col-xs-12">
        <div className="form-horizontal" >
          <LabelWrapper wrapperClass="col-sm-12" labelText="Name" controlId="name" >
            <Validated context={validationResult["name"]}>
              <input className="form-control input-sm" type="text"
                id="name" value={location.name}
                onChange={(e) => this.update({ "name": e.target.value })} />
            </Validated>
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Telephone" controlId="phone" >
            <Validated context={validationResult["phone"]}>
              <input className="form-control input-sm" type="phone"
                id="phone" value={location.phone}
                onChange={(e) => this.update({ "phone": e.target.value })} />
            </Validated>
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Notes" controlId="notes" >
            <Validated context={validationResult["notes"]}>
              <input className="form-control input-sm" type="text"
                id="notes" value={location.notes}
                onChange={(e) => this.update({ "notes": e.target.value })} />
            </Validated>
          </LabelWrapper>
        </div>
        <div>
        <button type="button" className="btn btn-success" onClick={this.save}>Save</button>
        <button type="button" className="btn btn-basic" onClick={this.props.showViewer}>Cancel</button>
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

export default Editor;
