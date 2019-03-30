import React from 'react';
import LocationPicker from '../../../generic/google/locationPicker';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';

class Viewer extends React.Component {

  containerElement = <div style={{ height: "100%" }} />;
  loadingElement = <div style={{ height: "100%" }}> <p>Loading map</p></div>;

  render() {
    const location = this.props.initialData || {};
    return <div className="row same_height">
      <div className="col-lg-4 col-xs-12">
        <div className="form-horizontal" >
          <LabelWrapper wrapperClass="col-sm-12" labelText="Name" controlId="name" >
               {location.name}
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Telephone" controlId="phone" >
            {location.phone}
          </LabelWrapper>
          <LabelWrapper wrapperClass="col-sm-12" labelText="Notes" controlId="notes" >
            {location.notes}
          </LabelWrapper>
        </div>
      </div>
      <div className="col-lg-8 col-xs-12">
        <LocationPicker value={location.coords} containerElement={this.containerElement}
          mapElement={this.loadingElement} 
                    singleLocation readOnly />
      </div>
    </div>;
  }

}

export default Viewer;
