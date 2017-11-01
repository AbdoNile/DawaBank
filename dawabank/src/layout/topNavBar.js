import React from 'react';

class TopNavBar extends React.Component {
  render() {
    return (
      <header>
            <div className="container">
                <div className="logo">
                    <a href="index.html"><img src="images/logo.png" alt=""/></a>
                </div>
                
                <ul className="nav">
                    <li className="active"><a href="index.html">Dashboard</a></li>
                    <li><a href="My_Offers.html">My Offers</a></li>
                    <li><a href="Search_Results.html">Search</a></li>
                </ul>
                <div className="actions">
                    <div className="dropdown profile">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mIcon">&#xf206;</i>
                    </button>
                    
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">My Profile</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul> 
                    </div>
                    <div className="dropdown notifications">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <i className="mIcon">&#xf1fb;</i>
                            <span className="new">3</span>
                    </button>
                        <ul className="dropdown-menu">
                            <li className="not_seen">
                                <a href="Messages.html">
                                    <span className="time">now</span>
                                    <h4>Ehab Salem</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </a>
                            </li>
                            <li>
                                <a href="Messages.html">
                                    <span className="time"><span>2</span>Mins ago</span>
                                    <h4>Ahmed Shaarawy</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </a>
                            </li>
                            <a href="Messages.html" className="see_all"><i className="mIcon">&#xf275;</i>See All</a>
                        </ul>
                    </div>
                    <a href="My_Offers.html" className="btn btn-primary has_icon"><i className="mIcon">&#xf158;</i>New Offer</a>
                </div>
            </div>
        </header>
    )
  }
}

export default TopNavBar;
