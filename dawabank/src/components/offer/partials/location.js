import React from 'react';
import MyLocations from './mylocations';
import SelectLocation from './selectLocation';

class Location extends React.Component {
   constructor(props) {
    super(props);
        this.state = {selection_method : "history"};
  }

  setAddressSelectionMethod = (method) => {
        this.setState({selection_method : method});
  }


  render() {
    return <div>
        {
            this.state.selection_method === "history" && 
             <MyLocations location={this.props.location} onChange={this.props.onChange} toggleMethod={this.setAddressSelectionMethod} />
        }

        {
            this.state.selection_method === "picker" && 
             <SelectLocation location={this.props.location}  onChange={this.props.onChange}  toggleMethod={this.setAddressSelectionMethod} />
        }
    </div>;
  }
}

export default Location;
