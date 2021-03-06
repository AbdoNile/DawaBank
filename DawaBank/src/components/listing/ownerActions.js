import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class OwnerActions extends Component {
    render() {

        return [<button className="btn btn-primary" type="button">
            <Link to={'/edit-offer/' + this.props.offerId} > Edit</Link>
        </button>,
            <button className="btn btn-default" type="button">Taken</button>,
            <button className="btn btn-danger" type="button" onClick={() => this.props.deleteHandler(this.props.offerId)}>Delete
        </button>];
    }
}

export default OwnerActions;