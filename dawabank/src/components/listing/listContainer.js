import React from 'react';

import ListItem from './listItem';
import LocationPicker from '../../generic/controls/locationPicker';

class ListContainer extends React.Component {
  containerElement = <div  style={{ height: "300px"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}>
                <p>Loading map</p>
          </div>;


  render() {
    let offers = this.props.offers;
    let pins = [];
    const offersTags = offers ? offers.map(function(offer){
        pins.push(offer.contactDetails.coordinates.position);
        return <ListItem offer={offer}  deleteHandler={this.props.deleteHandler} />
    }, this) : null;
    return <div className="row">
            <div className="col-sm-4">
                     <LocationPicker readOnly boundValue={pins}  containerElement={this.containerElement} 
                        loadingElement={this.loadingElement} dataElement="coordinates" />
            </div>
            <div className="col-sm-8">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Medication </th>
                                <th>Quantity </th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {offersTags}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
  }

 
}

export default ListContainer;
