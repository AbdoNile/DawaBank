import React from 'react';
import {  Route } from 'react-router';
import {HashRouter} from 'react-router-dom';

import Theatre from './layout/theatre';
import SearchPage from './components/search/searchPage';
import MaintainOffer from './components/offer/maintainOffer';
import MyOffers from './components/myOffers/myOffers';
import Login from './components/user/login';

class RouteMap extends React.Component {
   render() {
    return  <HashRouter >
         <Theatre >
           
           <Route path="/Login" component={Login} />
           <Route path="/Find" component={SearchPage} />
           <Route path="/Offer" component={MaintainOffer} />   
           <Route path="/MyOffers" component={MyOffers} /> 
         </Theatre>
     </HashRouter> ;
  }

}

export default RouteMap;
