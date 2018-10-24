import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class VisitorActions extends Component {
    render() {

        return [
            <button type="button" className="btn btn-icon btn-warning" data-toggle="modal" data-target="#send_message">
                <i className="mIcon">&#xf15a;</i>
            </button>
            ,
            <button type="button" className="btn btn-icon btn-info" data-toggle="modal" data-target="#send_message">
                <i className="mIcon">&#xf1f9;</i>
            </button>

        ];
    }
}

export default VisitorActions;