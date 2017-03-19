import React from 'react';
import {render} from 'react-dom';
import RouteMap from './routeMap';


class App extends React.Component {
    render () {
     return  (<RouteMap />) ;
    }
}
export default App;
render( <App />, document.getElementById( 'root' ) );