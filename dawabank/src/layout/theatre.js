import React from 'react';
import TopNavBar from './topNavBar';
import Footer from './footer';

class Theatre extends React.Component { 
  render() {
    return (
      <div>
        <TopNavBar/>

        <main className="container">
          {this.props.children}
        </main>
        
        <Footer/>
      </div>
    )
  }
}

export default Theatre;
