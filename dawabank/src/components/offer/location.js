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
             <MyLocations {...this.props} toggleMethod={this.setAddressSelectionMethod} />
        }

        {
            this.state.selection_method === "picker" && 
             <SelectLocation {...this.props} toggleMethod={this.setAddressSelectionMethod} />
        }
    </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Location;
