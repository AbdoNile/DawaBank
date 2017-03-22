import React, { Component } from 'react';

class DateInput extends Component {
    render() {
          let fieldLabel = this.props.label;
          let fieldType = this.props.type;
    
        return (
            <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">{fieldLabel}</label>
                        </div>
                        <div className="col-sm-8">
                           <input className="form-control input-sm" 
                           type="date" 
                           value={this.state[this.dataElement]} />; 
                        </div>
                    </div>
        );
    }
}

export default DateInput;