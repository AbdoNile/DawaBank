import React from 'react';
import InteractionUtility from '../../generic/utility/interactionUtility';

import OfferService from '../../services/offerService';

import ListContainer from '../listing/listContainer';

class MyOffers extends React.Component {
 constructor() {
    super();
    this.state = { offers: [] };
  }
    
  deleteOffer = (offer) => {
    var modelProps = { heading : 'Confirm Deletion' , body : 'are you sure to want to delete this offer?'};
    var thisComponent = this;
    InteractionUtility.confirm(this, modelProps).then(function(result){
        OfferService.DeleteOffer(offer.Id);
        thisComponent.refreshOffers();
    });
  }

  refreshOffers = () => {
    OfferService.FindOffers().then((offers) => {
        this.setState({ offers });
    });
  }

  componentDidMount() {
    this.refreshOffers();
  }


  render() {
    return (
        <div>
            {this.state.confirm}
            <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer}/>
        </div>
    )
  }
  
}

export default MyOffers;
