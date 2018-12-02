import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';
import { Alert } from 'react-bootstrap';
import offerService from '../../services/offerService';

class ListContainer extends React.Component {
    containerElement = <div style={{ height: "100%" }} />;
    loadingElement = <div style={{ height: "100%" }}>
        <p>Loading map</p>
    </div>;


    resultsSummary = (offers, summaryPhrase) => {
       if(offers.legnth > 0){
       
        return <Alert bsStyle="success"> found  {offers.legnth} {summaryPhrase}  </Alert>;
       }
       else{
        return <Alert bsStyle="warning"> No results found matching your search.  </Alert>;
       }
    }


    render() {
        let items = this.props.offers;
        let pins = [];
        let summary = this.resultsSummary(items, "summary");
        const offersTags = items ? items.map(function (item) {
            if (item.pickupLocation == null) return null;
            item.pickupLocation.key = item.id;
            pins = _.concat(pins, item.pickupLocation);
            return <ListItem item={item} showOwnerActions={this.props.showOwnerActions} deleteHandler={this.props.deleteHandler} key={item.id} />
        }, this) : null;

        return (
            <div>
                {summary} 
            <table className="table table-hover shopping-cart-wrap">

                    <tbody>
                        {offersTags}


                    </tbody>
                </table>

            </div>
        );


    }


}

export default ListContainer;
