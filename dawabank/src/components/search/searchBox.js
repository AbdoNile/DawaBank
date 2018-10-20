import React from 'react';
import ProductLookup from '../common/productLookup';
import PlacesSearch from 'generic/google/placesSearch';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: this.props.product };
    }

    product_updated = (product) => {
        var newState = Object.assign({}, this.state.search, { product });
        this.setState({ "search": newState })
    }

    location_updated = (location) => {
        var newState = Object.assign({}, this.state.search, { location });
        this.setState({ "search": newState })
    }


    doSearch = () => {
        this.props.onSearch(this.state.search);
    }

    render() {
        return (
            <div className="section">
                <div className="search">
                    <form action="" className="form-horizontal">
                        <div className="form-group">
                            <div className="col-lg-8">
                                <ProductLookup className="form-control" onChange={this.product_updated} />

                            </div>
                            <div className="col-lg-4">
                                <PlacesSearch className="form-control" onChange={this.location_updated}>
                                    <input type="text" className="form-control" placeholder="Enter Location" />
                                </PlacesSearch>
                            </div>
                        </div>
                        <button type="button" onClick={this.doSearch} className="btn btn-primary">Search</button>
                    </form>
                    <div> <pre> {JSON.stringify(this.state.search, null, 2)}</pre>
                       
                    </div>
                </div>
            </div>
        );
    }

}

export default SearchBox;
