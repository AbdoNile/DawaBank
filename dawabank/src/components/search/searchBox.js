import React from 'react';
import { Well} from 'react-bootstrap';
import FormContainer from '../../generic/formContainer';
import Wrapper from '../../generic/controlWrapper/wrapper';
import ProductLookup from '../common/productLookup';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
            this.state = {product : this.props.product};
    }

    search_updated = (data) => {
        var newState = Object.assign({}, this.state.search, data );
        this.setState({ "search" : newState })
        console.log(data);
    }   

    render() {
        return         <div className="section">
            <div className="search">
                <h3>Search</h3>
                <form className="inline">
                <FormContainer className="" boundValue={this.state.product} onChange={this.search_updated} dataElement="Search" >
                <ProductLookup  dataElement="product"  />
                    </FormContainer>  
                <select name="" id="" className="form-control">
                    <option value="" selected disabled>Location</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                    <button type="button" className="btn btn-primary">Search</button>
                </form>
            </div>
        <pre>{JSON.stringify(this.state.search, null, 2) }</pre>
          </div>
    }

}

export default SearchBox;
