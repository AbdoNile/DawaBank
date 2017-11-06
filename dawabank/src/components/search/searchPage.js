import React from 'react';
import InteractionUtility from 'generic/utility/interactionUtility';

import OfferService from 'services/offerService';

import SearchBox from './searchBox';
import ListContainer from '../listing/listContainer';

class SearchPage extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };

  }
  render() {
    return (this.state.offers != null && 
    <div className="container">
		<h1 className="page-title"><i className="mIcon">&#xf1c3;</i>Search Results</h1>
        {this.state.confirm}
        <SearchBox onSearch={this.performSearch}/>
        <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>);
  }
    
  deleteOffer = (offer) => {
      var modelProps = { heading : 'Confirm Deletion' , body : 'are you sure to want to delete this offer?'};
      var thisComponent = this;
      InteractionUtility.confirm(this, modelProps).then(function(result){
          OfferService.DeleteOffer(offer._id).then(() => {
                 OfferService.FindOffers().then((offers) => {
                    thisComponent.setState({ offers: offers });
                 });
          });
      });
  }


  componentDidMount() {
      this.performSearch();
    
  }
  

    performSearch(query) {
        var thisComponent = this;
        OfferService.FindOffers(query).then((offers) => {
            thisComponent.setState({ offers: offers });
        }).catch((err) => console.error(err));
    }
}

export default SearchPage;
