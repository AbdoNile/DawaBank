import React from 'react';
import {render} from 'react-dom';
import RouteMap from './routeMap';

//Import CSS
import './sass/app.scss'

class App extends React.Component {
    render () {
     return  (<RouteMap />) ;
    }
}
export default App;
render( <App />, document.getElementById( 'root' ) );