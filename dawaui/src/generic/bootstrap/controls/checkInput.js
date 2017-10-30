import React from 'react';
import baseControl from '../../baseControl';

class CheckInput extends baseControl {
    
    extractCurrentValue = (event) => {
        return event.target.checked;
    }

    render() {
        return   <input type="checkbox" 
        id={this.props.dataElement}
        checked={!this.state.boundValue}
                                       onChange={this.handleChange}
                                    /> 
                         
      }
}

export default CheckInput;
