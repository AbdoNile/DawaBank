import React from 'react';
import LocationPicker from 'generic/bootstrap/controls/locationPicker';
import FormField from 'generic/formField';
import FormContainer from 'generic/formContainer'
import CheckInput from 'generic/bootstrap/controls/checkInput';
import LabelWrapper from 'generic/bootstrap/controlWrapper/labelWrapper';

class SelectLocation extends React.Component {
 constructor(props) {
    super(props);
       this.state = {location : this.props.location};

  }

  containerElement = <div  style={{ height: "100%"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}> <p>Loading map</p></div>;

    onCoordinatePicked = (value) => {
        let location = value.pins[0];
        this.locationUpdated({location : location});
    }       

    locationUpdated = (value) => {
      let mergedValue = Object.assign({}, this.state.data, value.location );
      this.setState({ data : mergedValue });
      this.props.onChange( {"location" : mergedValue});
    }

    render() {
        return      <div className="row same_height">
            <div className="col-sm-6 col-xs-12">
                <FormContainer  className="form-horizontal"
                 boundValue={this.state.location} onChange={(event) => this.locationUpdated(event)} dataElement="location" >
                            <div className="col-sm-12">
								<div className="form-group">
									<label>Address</label>
									<div className="row">
										<div className="col-sm-12 search_input">
											<input type="text" className="form-control has_autocomplete"
                                             placeholder="Search for address" />
										</div>
									</div>
								</div>
							</div>
                    <FormField   wrapperClass="col-sm-12" label="Name" type="text" dataElement="contact_person" />
                    <FormField   wrapperClass="col-sm-12" label="Telephone" type="text"  dataElement="phone" />
                    <FormField   wrapperClass="col-sm-12" label="Notes" type="text"  dataElement="notes" />
                    <LabelWrapper >
                    <CheckInput wrapperClass="col-sm-12" className="checkbox-inline" 
                    label="Add to my favorite locations" dataElement="addToFavorite"  />
                    </LabelWrapper>
                  
                </FormContainer>
                <button className="btn btn-warning pull-right btn-large"  onClick={() => this.props.toggleMethod("history")} >
                Use a previouse address</button>
            </div>
            <div className="col-sm-6 col-xs-12">
                    <LocationPicker  boundValue={this.state.pins}  containerElement={this.containerElement} 
                        loadingElement={this.loadingElement} dataElement="pins"  
                        singleLocation onChange={(event) => this.onCoordinatePicked(event)}  />
            </div>
    </div>;
  }
}

export default SelectLocation;
