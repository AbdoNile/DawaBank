import React from 'react';
import _ from 'lodash';
import ListItem from './listItem';
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
            <div className="section other_medicines">

                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                   
                    <Tab eventKey={1} title="Map">
                        <div className="col-lg-12 col-xs-12">
                            <div className="list-group">
                                {offersTags}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="List">
                        <div className="col-lg-12 col-xs-12">
                            <LocationPicker

                                readOnly boundValue={pins} containerElement={this.containerElement}
                                mapElement={this.loadingElement} dataElement="coordinates" singleLocation />
                        </div>

                    </Tab>
                </Tabs>

            </div>
        );


    }


}

export default ListContainer;
