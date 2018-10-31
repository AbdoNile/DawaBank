import React from 'react';
import OfferService from 'services/offerService';
import SearchBox from './searchBox';
import ListContainer from '../listing/listContainer';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { offers: [] };
        this.performSearch = this.performSearch.bind(this);
    }


    render() {
        return (this.state.offers != null &&
            <div className="container">
                <h1 className="page-title"><i className="mIcon">&#xf1c3;</i>Find Medicine</h1>
                {this.state.confirm}
                <SearchBox onSearch={this.performSearch} />
                <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer} />
            </div>);
    }

  
    componentDidMount() {
        this.performSearch();

    }


    performSearch(query) {
        query = query ? query : {};
        var thisComponent = this;
        OfferService.FindOffers(query.Search).then((offers) => {
            thisComponent.setState({ offers: offers });
        }).catch((err) => console.error(err));
    }
}

export default SearchPage;
