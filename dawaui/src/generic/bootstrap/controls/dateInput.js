import React from 'react';
import baseControl from '../../baseControl';

class DateInput extends baseControl {
 
    render() {
        
        let assignedValue = this.state.boundValue != null ?  this.state.boundValue : "" ;

        return (
                <input className="form-control input-sm" 
                 id={this.props.dataElement}
                type="date" 
                value={assignedValue} 
                onChange={this.handleChange} />
        );
    }
}
 
export default DateInput;