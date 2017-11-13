import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';
import LocationPicker from 'generic/google/locationPicker';

class ListContainer extends React.Component {
  containerElement = <div  style={{ height: "100%"  }} />;
  loadingElement =  <div  style={{ height: "100%" }}>
                <p>Loading map</p>
          </div>;


  render() {
    let items = this.props.offers;
    let pins = [];
    const offersTags = items ? items.map(function(item){
        if(item.pickUpLocation == null) return null;
        item.pickUpLocation.key = item.id;
        pins = _.concat(pins, item.pickUpLocation);
        return  <ListItem item={item} showOwnerActions={this.props.showOwnerActions} deleteHandler={this.props.deleteHandler} key={item.id} />
    }, this) : null;

    return  (
        //(items.length > 0) &&
        <div className="section other_medicines">
            <div className="row same_height">
                <div className="col-sm-6 col-xs-12">
                        <LocationPicker 
                        
                        readOnly boundValue={pins}  containerElement={this.containerElement} 
                        mapElement={this.loadingElement} dataElement="coordinates" singleLocation />    
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="table-responsive">
                        <div className="sorting">
                            <select name="" id="" className="form-control">
                            <option value="" disabled>Sorting</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                        </div>
                        <table className="table table-striped wraped_table table_colored no_margin">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {offersTags}
                            
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>);
    
    
  }

 
}

export default ListContainer;
