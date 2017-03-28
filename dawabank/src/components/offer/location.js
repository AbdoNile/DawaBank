import React from 'react';
import LocationPicker from '../../generic/controls/locationPicker';
import FormField from '../../generic/formField';
import FormContainer from '../../generic/formContainer'

class Location extends React.Component {
 constructor(props) {
    super(props);
       this.state = {contactDetails : this.props.contactDetails};
  }

  containerElement = <div  style={{ height: "300px"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}>
                <p>Loading map</p>
          </div>;


  render() {
   return   <div className="row">
     <div className="col-sm-4">
      <FormContainer className="form-horizontal" boundValue={this.state.contactDetails} emitChanges={this.props.onUpdate} dataElement="contactDetails" >
                    <FormField  label="Name" type="text" dataElement="name" />
                    <FormField  label="Telephone Number" type="text"  dataElement="phone" />
                    <FormField  label="Add to my favorite locations" type="checkbox" dataElement='addToFavorite' />
                    <div className="form-group">
                    <div className="col-sm-offset-2">
                        <button className="btn btn-primary btn-sm pull-right" type="submit">Update </button>
                       
                    </div>
                    </div>
                     <LocationPicker pins={this.props.pins}  containerElement={this.containerElement} 
        loadingElement={this.loadingElement} dataElement="coordinates" boundValue={this.state.contactDetails}/>
                 </FormContainer>
           </div>
     <div className="col-sm-8">
      
        </div>
   
    </div>;
  }
}

export default Location;
