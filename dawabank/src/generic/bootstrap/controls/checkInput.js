import React from 'react';
import baseControl from '../../baseControl';

class CheckInput extends baseControl {
    
    extractCurrentValue = (event) => {
        return event.target.checked;
    }

    render() {
        return   <input type="checkbox" 
        id={this.props.dataElement}  onChange={this.handleChange} /> 
                         
      }
}

export default CheckInput;
