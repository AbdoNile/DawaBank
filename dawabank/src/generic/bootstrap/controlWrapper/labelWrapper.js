import React from 'react';
import PropTypes from 'prop-types';

class LabelWrapper extends React.Component {

    render() {
        return (
            <div className={this.props.wrapperClass}>
                <div className="form-group">
                    <label htmlFor={this.props.controlId}>
                        {this.props.labelText}
                    </label>
                    {this.props.children}
                </div>
            </div>);
    }
}

LabelWrapper.propTypes = {
    wrapperClass: PropTypes.string,
    controlId: PropTypes.string,
    labelText: PropTypes.string
};

export default LabelWrapper;
