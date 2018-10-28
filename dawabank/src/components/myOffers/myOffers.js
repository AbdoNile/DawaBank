import React from 'react';
import dialogs from 'utility/dialogs';

import OfferService from 'services/offerService';

import ListContainer from '../listing/listContainer';
import { LinkContainer } from 'react-router-bootstrap';

class MyOffers extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };
  }

  render() {
    if(this.state.offers == null || this.state.offers.length === 0){
        return (<div className="page-header">
        <h1>You don't have any offers active    <small>
            <LinkContainer to="/offer">
                        <a className="btn btn-primary has_icon"><i className="mIcon">&#xf158;</i>Place an offer now</a>    
                    </LinkContainer> </small></h1>
      </div>);
    }
    return <div>
        {this.state.confirm}
        <h2>My Offers</h2>
        
        <ListContainer showOwnerActions={true} offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>;
  }
    
  deleteOffer = (offer) => {
      var modelProps = { heading : 'Confirm Deletion' , body : 'are you sure to want to delete this offer?'};
      var thisComponent = this;
      dialogs.confirm(this, modelProps).then(function(result){
          OfferService.DeleteOffer(offer.id);
          thisComponent.loadOffers();
      });
  }

  loadOffers = () => {
        OfferService.FindOffers().then((offers) => {
            this.setState({ offers });
        });
  }

  componentDidMount() {
    this.loadOffers();
  }
  
}

export default MyOffers;
