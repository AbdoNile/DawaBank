import React from 'react';
import LocationPicker from 'generic/google/locationPicker';
import FormField from 'generic/formField';
import FormContainer from 'generic/formContainer';

class SelectLocation extends React.Component {
 
  containerElement = <div  style={{ height: "100%"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}> <p>Loading map</p></div>;

  onCoordinatePicked = (value) => {
      let googleLocation = value.pins[0];

      let location = {
        key : googleLocation.google_address_id,
        position : googleLocation.position , 
        fullAddress : googleLocation.title
      };
      
      this.locationUpdated({PickupLocation : location});
  }       

  locationUpdated = (value) => {
    
    let mergedValue = Object.assign({}, this.currentValue, value.PickupLocation );
    this.currentValue = mergedValue;
    this.props.onChange( {"pickupLocation" : mergedValue});
  }

  componentWillReceiveProps(nextProps){
      this.currentValue = nextProps.location;
  }

  render() {
      return      <div className="row same_height">
          <div className="col-sm-6 col-xs-12">
              <FormContainer  className="form-horizontal"
                boundValue={this.props.location} onChange={(event) => this.locationUpdated(event)} dataElement="PickupLocation" >
            
                  <FormField   wrapperClass="col-sm-12" label="Name" type="text" dataElement="name" />
                  <FormField   wrapperClass="col-sm-12" label="Telephone" type="text"  dataElement="phone" />
                  <FormField   wrapperClass="col-sm-12" label="Notes" type="text"  dataElement="notes" />
                  <FormField   label="Add to my favorite locations" type="checkbox"
                    wrapperClass="checkbox-inline col-sm-12" dataElement="addToFavorite" />
              </FormContainer>
              <button className="btn btn-warning pull-right btn-large"  onClick={() => this.props.toggleMethod("history")} >
              Use a previouse address</button>
          </div>
          <div className="col-sm-6 col-xs-12">
                  <LocationPicker  boundValue={this.props.location}  containerElement={this.containerElement} 
                      mapElement={this.loadingElement} dataElement="pins"  
                      singleLocation onChange={(event) => this.onCoordinatePicked(event)} searchBox={this.searchBoxElement}  />
            </div>
    </div>;
  }

}

export default SelectLocation;
