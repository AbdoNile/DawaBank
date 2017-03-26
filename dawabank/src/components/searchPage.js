import React from 'react';

import OfferService from '../services/offerService';


import SearchBox from './searchBox';
import ListContainer from './listing/listContainer';

class SearchPage extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };

  }
  render() {
    return <div>
        <SearchBox/>
        <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>;
  }
    
  deleteOffer = (offer) => {
     OfferService.DeleteOffer(offer.Id);
     this.setState({ offers: OfferService.FindOffers() });
  }


  componentDidMount() {
    this.setState({ offers: OfferService.FindOffers() });
  }
  
}

export default SearchPage;
