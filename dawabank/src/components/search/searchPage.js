import React from 'react';
import InteractionUtility from '../../generic/utility/interactionUtility';

import OfferService from '../../services/offerService';

import SearchBox from './searchBox';
import ListContainer from '../listing/listContainer';

class SearchPage extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };

  }
  render() {
    return (this.state.offers != null && <div>
        {this.state.confirm}
        <SearchBox/>
        <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>);
  }
    
  deleteOffer = (offer) => {
      var modelProps = { heading : 'Confirm Deletion' , body : 'are you sure to want to delete this offer?'};
      var thisComponent = this;
      InteractionUtility.confirm(this, modelProps).then(function(result){
          OfferService.DeleteOffer(offer._id);
          thisComponent.setState({ offers: OfferService.FindOffers() });
      });
  }


  componentDidMount() {
      OfferService.FindOffers().then((offers) => {
            this.setState({ offers: offers });
      }).catch((err) => console.error(err));
    
  }
  
}

export default SearchPage;
