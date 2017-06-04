import React from 'react';
import _ from 'lodash';


import ListItem from './listItem';
import LocationPicker from '../../generic/controls/locationPicker';

class ListContainer extends React.Component {
  containerElement =( <div  style={{ height: "70vh"  }} />);
  loadingElement =  (
      <div  style={{ height: "100%" }}>
        <p>Loading map</p>
      </div>
    );



  render() {
    let items = this.props.offers;
    let pins = [];
    const offersTags = items ? items.map(function(item){
        if(item.location == null) return null;
        item.location.key = item._id;
        pins = _.concat(pins, item.location);
        return  <ListItem item={item} deleteHandler={this.props.deleteHandler} key={item._id} />
    }, this) : null;

    return (  
        <div className="row-fluid no-padding no-margin">
            <div className="col-sm-4 no-padding no-margin">
               {(items.length > 0) && offersTags}                  
            </div>
            
            {(items.length > 0) &&
                <div className="col-sm-8 no-padding no-margin">
                    <LocationPicker readOnly boundValue={pins}  containerElement={this.containerElement} 
                    loadingElement={this.loadingElement} dataElement="coordinates" singleLocation />
                </div>
            }
            
            
        </div>
    )
  }
}

export default ListContainer;
