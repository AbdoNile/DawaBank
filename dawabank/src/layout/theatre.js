import React from 'react';
import TopNavBar from './topNavBar';
import Footer from './footer';

class Theatre extends React.Component { 
  render() {
    return (
      <div>
        <TopNavBar/>

        <div className="container">
          {this.props.children}
        </div>
        
        <Footer/>
      </div>
    )
  }
}

export default Theatre;
