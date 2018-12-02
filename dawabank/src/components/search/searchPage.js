import React from 'react';
import offerService from '../../services/offerService';
import SearchBox from './searchBox';
import ListContainer from '../listing/listContainer';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { offers: [] };
    }


    render() {
        return (this.state.offers != null &&
            <div className="container">
                <h3 className="page-title"><i className="mIcon">&#xf1c3;</i>Find Medicine</h3>
                {this.state.confirm}
                <SearchBox onSearch={this.performSearch} />
                <ListContainer offers={this.state.offers} deleteHandler={this.deleteOffer} />
            </div>);
    }

  
    componentDidMount() {
        this.performSearch();

    }


    performSearch = (query) => {
        var request = {}
        if(query != null){
            if(query.product != null){
                request.productId = query.product.id
            }

            if(query.location != null){
                request.location = query.location.position
            }
        }

        offerService.find(request).then((offers) => {
            this.setState({ offers: offers });
        }).catch((err) => console.error(err));
    }
}

export default SearchPage;
