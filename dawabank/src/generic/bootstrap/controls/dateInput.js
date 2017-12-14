import React from 'react';
import baseControl from '../../baseControl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class DateInput extends baseControl {
 
    extractCurrentValue = (event) => {
        return event;
    }

    render() {
        
        let assignedValue =  this.state != null ? moment(this.state.boundValue) : null ;
        return (
                <DatePicker className="form-control input-sm" 
                 id={this.props.dataElement}
                type="date" 
                selected={assignedValue} 
                onChange={this.handleChange} />
        );
    }
}
 
export default DateInput;