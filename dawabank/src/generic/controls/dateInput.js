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
                        
                           <input className="form-control input-sm" 
                           type="date" 
                            value={assignedValue} 
                            onChange={this.handleChange} />
                       
        );
    }
}
 
export default DateInput;