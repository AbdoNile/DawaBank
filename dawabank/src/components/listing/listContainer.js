import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';
import '../../stylesheets/listing.css'

import LocationPicker from 'generic/google/locationPicker';
import { Tabs, Tab } from 'react-bootstrap';
class ListContainer extends React.Component {
    containerElement = <div style={{ height: "100%" }} />;
    loadingElement = <div style={{ height: "100%" }}>
        <p>Loading map</p>
    </div>;


    render() {
        let items = this.props.offers;
        let pins = [];
        const offersTags = items ? items.map(function (item) {
            if (item.pickupLocation == null) return null;
            item.pickupLocation.key = item.id;
            pins = _.concat(pins, item.pickupLocation);
            return <ListItem item={item} showOwnerActions={this.props.showOwnerActions} deleteHandler={this.props.deleteHandler} key={item.id} />
        }, this) : null;

        return (

            <table className="table table-hover shopping-cart-wrap">
                <thead className="text-muted">
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col" width="200" className="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {offersTags}


                </tbody>
            </table>


        );


    }


}

export default ListContainer;
