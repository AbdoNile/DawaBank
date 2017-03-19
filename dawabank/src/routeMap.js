import React from 'react';
import { Router, Route, IndexRoute,  hashHistory } from 'react-router';
import Theatre from './layout/theatre';
import SearchPage from './components/searchPage';
import Offer from './components/offer/offer';


class RouteMap extends React.Component {
   render() {
    return  <Router history={hashHistory}>
         <Route path="/" component={Theatre} >
           <IndexRoute component={SearchPage} />
           <Route path="/Find" component={SearchPage} />
           <Route path="/Offer" component={Offer} />   
           
           
          </Route>
     </Router> ;
  }

  
}

export default RouteMap;
