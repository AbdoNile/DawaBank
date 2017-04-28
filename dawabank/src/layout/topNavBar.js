import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class TopNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        
        <Navbar.Header>
          <Navbar.Brand>Dawa Bank</Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/Offer' }}>
              <NavItem >Offer</NavItem>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/Find' }}>
              <NavItem >Search</NavItem>
            </LinkContainer>

            <LinkContainer to={{ pathname: '/MyOffers' }}>
              <NavItem >My Offers</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default TopNavBar;
