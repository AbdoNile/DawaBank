import React from 'react';
import baseControl from '../baseControl';

class DateInput extends baseControl {
     constructor(props) {
        super(props);
        this.state = {boundValue: props.boundValue};
    }
    
    render() {
        let assignedValue = this.state.boundValue;

        return (
            <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">{this.fieldLabel}</label>
                        </div>
                        <div className="col-sm-8">
                           <input className="form-control input-sm" 
                           type="date" 
                            value={assignedValue} 
                            onChange={this.handleChange} />
                        </div>
                    </div>
        );
    }
}

export default DateInput;