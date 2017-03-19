import React from 'react';
import SearchBox from './searchBox';
import ListContainer from './listing/listContainer';

import SeachService from '../services/searchService';
class SearchPage extends React.Component {
 constructor() {
    super();
        this.state = { offers: [] };

  }
  render() {
    return <div>
        <SearchBox/>
        <ListContainer offers={this.state.offers}/>
    </div>;
  }
    
  componentDidMount() {
    this.setState({ offers: SeachService.FindOffers() });
  }
  
}

export default SearchPage;
