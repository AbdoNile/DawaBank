import React from 'react';
import LocationPicker from 'generic/bootstrap/controls/locationPicker';
import FormField from 'generic/formField';
import FormContainer from 'generic/formContainer'
import {Button} from 'react-bootstrap';

class SelectLocation extends React.Component {
 constructor(props) {
    super(props);
       this.state = {location : this.props.location};

  }

  containerElement = <div  style={{ height: "300px"  }} />;
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
        return      <div className="row">
            <div className="col-sm-4">
                <FormContainer className="form-horizontal" boundValue={this.state.location} onChange={(event) => this.locationUpdated(event)} dataElement="location" >
                    <FormField  label="Name" type="text" dataElement="contact_person" />
                    <FormField  label="Telephone" type="text"  dataElement="phone" />
                    <FormField  label="Notes" type="text"  dataElement="notes" />
                    <FormField  label="Add to my favorite locations" type="checkbox" dataElement='addToFavorite' />
                </FormContainer>
                <Button bsStyle="primary" bsSize="large" block onClick={() => this.props.toggleMethod("history")} >Use a previouse address</Button>
            </div>
            <div className="col-sm-8">
                    <LocationPicker  boundValue={this.state.pins}  containerElement={this.containerElement} 
                        loadingElement={this.loadingElement} dataElement="pins"  
                        singleLocation onChange={(event) => this.onCoordinatePicked(event)}  />
            </div>
    </div>;
  }
}

export default SelectLocation;
