import React from 'react';
import {dialog} from '../../utility/dialogs';

import offerService from '../../services/offerService';

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
        <h3>My Offers</h3>
        
        <ListContainer showOwnerActions={true} offers={this.state.offers} deleteHandler={this.deleteOffer}/>
    </div>;
  }
    
  deleteOffer = (offer) => {
      var modelProps = { heading : 'Confirm Deletion' , body : 'are you sure to want to delete this offer?'};
      var thisComponent = this;
      dialog.confirm(this, modelProps).then(function(result){
          offerService.delete(offer.id);
          thisComponent.loadOffers();
      });
  }

  loadOffers = () => {
        offerService.find().then((offers) => {
            this.setState({ offers });
        });
  }

  componentDidMount() {
    this.loadOffers();
  }
  
}

export default MyOffers;
