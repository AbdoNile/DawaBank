import React from 'react';
import LocationPicker from '../../generic/controls/locationPicker';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'

class Location extends React.Component {
 constructor(props) {
    super(props);
       this.state = {location : this.props.location};
  }

  containerElement = <div  style={{ height: "300px"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}>
                <p>Loading map</p>
          </div>;


  render() {
   return      <div className="row">
       <div className="col-sm-4">
        <FormContainer className="form-horizontal" boundValue={this.state.location} onChange={this.props.onUpdate} dataElement="location" >
                    <FormField  label="Name" type="text" dataElement="name" />
                    <FormField  label="Telephone" type="text"  dataElement="phone" />
                    <FormField  label="Notes" type="text"  dataElement="phone" />
                    <FormField  label="Add to my favorite locations" type="checkbox" dataElement='addToFavorite' />
        </FormContainer>
           </div>
     <div className="col-sm-8">
         <FormContainer className="form-horizontal" boundValue={this.state.location} onChange={this.props.onUpdate} dataElement="location" >
    
             <LocationPicker  boundValue={this.state.pins}  containerElement={this.containerElement} 
        loadingElement={this.loadingElement} dataElement="coordinates"  singleLocation />
        </FormContainer>   
        </div>
    </div>;
  }
}

export default Location;
