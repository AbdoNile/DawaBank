import React from 'react';

class TopNavBar extends React.Component {
 

  render() {
    return <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header"><a className="navbar-brand navbar-link" href="#">DawaBank </a>
                <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
            </div>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="active" role="presentation"><a href="#">How does it work?</a></li>
                    <li role="presentation"><a href="#">FAQ </a></li>
                    <li role="presentation"><a href="#">Search for Medicine</a></li>
                    <li role="presentation"><a href="#">Offer Medicine</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    ;
  }

  
}

export default TopNavBar;
