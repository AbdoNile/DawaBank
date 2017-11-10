import React from 'react';
import FormContainer from 'generic/formContainer';
import ProductLookup from '../common/productLookup';
import PlacesSearch from 'generic/google/placesSearch';
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
            this.state = {product : this.props.product};
    }

    search_updated = (data) => {
        var newState = Object.assign({}, this.state.search, data );
        this.setState({ "search" : newState })
        
    }   

    search = () => {
        this.props.onSearch(this.state.search);
    }

    render() {
        return         <div className="section">
            <div className="search">
                <h3>Search</h3>
                <form className="inline">
                <FormContainer className="form-control" boundValue={this.state.product} onChange={this.search_updated} dataElement="Search" >
                <ProductLookup  dataElement="product" className="form-control" />
               						
                <PlacesSearch dataElement="location" className="form-control">
                        <input type="text" className="form-control" placeholder="Enter Location"/>
                </PlacesSearch>
                </FormContainer>  
               
                <button type="button" onClick={this.search} className="btn btn-primary">Search</button>
                </form>
            </div>
          </div>
    }

}

export default SearchBox;
