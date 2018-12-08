import React from 'react';
import { Alert } from 'react-bootstrap';

class ResultsSummary extends React.Component {
  render() {
    let offers = this.props.offers ?  this.props.offers  : [];
    if(offers.legnth > 0){
       
        return <Alert bsStyle="success"> found  {offers.legnth} found  </Alert>;
       }
       else{
        return <Alert bsStyle="warning"> No results found matching your search.  </Alert>;
       }
  }
}

export default ResultsSummary;