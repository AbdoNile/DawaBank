import React from 'react';
import { Well} from 'react-bootstrap';
import FormContainer from '../../generic/formContainer';
import Wrapper from '../../generic/controlWrapper/wrapper';
import ProductLookup from '../productLookup';
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
        return <div className="row">
                <div className="col-sm-6">
                    <Well >
                        <FormContainer className="" boundValue={this.state.product} onChange={this.search_updated} dataElement="Search" >
                                <Wrapper><ProductLookup  dataElement="product" label="Product" /></Wrapper>
                        </FormContainer>  
                    </Well>
                    <pre>{JSON.stringify(this.state.search, null, 2) }</pre>
                </div>
                </div>;
    }

 
}

export default SearchBox;
