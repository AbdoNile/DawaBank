import React from 'react';
import baseControl from '../baseControl';
class TextInput extends baseControl {
       
    render() {
        let assignedValue = this.state.boundValue != null ?  this.state.boundValue : "" ;

        return  <input className="form-control input-sm" type="text"
                             value={assignedValue} 
                            onChange={this.handleChange}
                            />
    }
}

export default TextInput;