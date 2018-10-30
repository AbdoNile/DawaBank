import React from 'react';

class ProtectedRoute extends React.Component {
    constructor() {
        super();
       
    }

    componentWillMount = () => {
          window.alert('New URL  '+ this.props.location.pathname);
        }
      

      
 
    
}

export default ProtectedRoute;
