import React from 'react';

import OfferService from '../services/offerService';

import ConfirmDialog from '../generic/interaction/confirmDialog';
import SearchBox from './searchBox';
import ListContainer from './listing/listContainer';

class SearchPage extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };

  }
  render() {
    return <div>
        {this.state.confirm}
        <SearchBox/>
        <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>;
  }
    
  deleteOffer = (offer) => {
     OfferService.DeleteOffer(offer.Id);
     this.setState({confirm : <ConfirmDialog modal={{ heading : 'Confirm Deletion'}} />})
     this.setState({ offers: OfferService.FindOffers() });
  }


  componentDidMount() {
    this.setState({ offers: OfferService.FindOffers() });
  }
  
}

export default SearchPage;
