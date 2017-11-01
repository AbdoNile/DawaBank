import React from 'react';
import {  Nav,   DropdownButton ,  NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

class TopNavBar extends React.Component {

  render() {
    return (
      <header> 
            <div className="container">
                <div className="logo">
                    <a href="index.html"><img src="images/logo.png" alt=""/></a>
                </div>
                <Nav>
                    <LinkContainer to="/Find">
                        <NavItem>Search</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/offer">
                        <NavItem>Create Offer</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/MyOffers">
                        <NavItem>My Offers</NavItem>
                    </LinkContainer>
                </Nav>
                <div className="actions">
                    <DropdownButton noCaret  className="dropdown profile" id="user_profile" 
                    title={
                            <i className="mIcon">&#xf206;</i>
                          
                    } >
                        <LinkContainer to="/profile">
                            <NavItem>My Profile</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/Logout">
                            <NavItem>LogOut</NavItem>
                        </LinkContainer>
                    </DropdownButton >
                        
                    <div className="dropdown notifications">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                         id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
                         aria-expanded="false">
                            <i className="mIcon">&#xf1fb;</i>
                            <span className="new">3</span>
                         </button>
                        
                    </div>
                    <LinkContainer to="/offer">
                        <a className="btn btn-primary has_icon"><i className="mIcon">&#xf158;</i>New Offer</a>    
                    </LinkContainer>
                    
                </div>
            </div>
        </header>
    )
  }
}

export default TopNavBar;
