import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';
import LocationPicker from '../../generic/controls/locationPicker';

class ListContainer extends React.Component {
  containerElement = <div  style={{ height: "300px"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}>
                <p>Loading map</p>
          </div>;


  render() {
    let items = this.props.offers;
    let pins = [];
    const offersTags = items ? items.map(function(item){
        if(item.location == null) return null;
        item.location.key = item._id;
        pins = _.concat(pins, item.location);
        return  <ListItem item={item}  deleteHandler={this.props.deleteHandler} key={item._id} />
    }, this) : null;

    return <div className="row">
              {(items.length > 0) &&
                <div className="col-sm-4">
                    <LocationPicker readOnly boundValue={pins}  containerElement={this.containerElement} 
                        loadingElement={this.loadingElement} dataElement="coordinates" singleLocation />
                </div>
              }
            
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
