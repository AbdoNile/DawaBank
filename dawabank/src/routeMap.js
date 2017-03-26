import React from 'react';
import { Router, Route, IndexRoute,  hashHistory } from 'react-router';
import Theatre from './layout/theatre';
import SearchPage from './components/searchPage';
import MaintainOffer from './components/offer/maintainOffer';
import MyOffers from './components/myOffers/myOffers';


class RouteMap extends React.Component {
   render() {
    return  <Router history={hashHistory}>
         <Route path="/" component={Theatre} >
           <IndexRoute component={SearchPage} />
           <Route path="/Find" component={SearchPage} />
           <Route path="/Offer" component={MaintainOffer} />   
           <Route path="/MyOffers" component={MyOffers} /> 
           
           
          </Route>
     </Router> ;
  }

  
}

export default RouteMap;
