import React from 'react';
import { Nav, DropdownButton, NavItem } from 'react-bootstrap';
import { RequireLogin } from '../security/protectedRoute';
import { LinkContainer } from 'react-router-bootstrap';
import AuthService from '../security/authService';
import authService from '../security/authService';

class TopNavBar extends React.Component {

    logout = () => {
        AuthService.logout() ;

    }
    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="index.html"><img src="images/logo.png" alt="" /></a>
                    </div>
                    <Nav>
                        <LinkContainer to="/search">
                            <NavItem>Search</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/create-offer">
                            <NavItem>Donate</NavItem>
                        </LinkContainer>
                        <RequireLogin>
                            <LinkContainer to="/my-offers">
                                <NavItem>My Donations</NavItem>
                            </LinkContainer>
                        </RequireLogin>
                    </Nav>
                    <div className="actions">
                        <RequireLogin>
                            <DropdownButton noCaret className="dropdown profile" id="user_profile"
                                title={
                                    <i className="mIcon">&#xf206;</i>

                                } >
                                <LinkContainer to="/profile">
                                    <NavItem>{authService.getProfile()["name"]}</NavItem>
                                </LinkContainer>
                                <LinkContainer onClick={this.logout} to="/home">
                                    <NavItem>Log Out</NavItem>
                                </LinkContainer>
                            </DropdownButton >
                        </RequireLogin>

                        {/*<div className="dropdown notifications">
                            <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="mIcon">&#xf1fb;</i>
                                <span className="new">3</span>
                            </button>

                            </div> */}
                        <LinkContainer to="/create-offer">
                            <a className="btn btn-primary btn-lg has_icon"><i className="mIcon">&#xf158;</i>Donate</a>
                        </LinkContainer>

                    </div>
                </div>
            </header>
        )
    }
}

export default TopNavBar;
