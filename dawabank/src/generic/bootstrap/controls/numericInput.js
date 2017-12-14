import React from 'react';
import baseControl from '../../baseControl';

class NumericInput extends baseControl {

    render() {
       let assignedValue = this.state != null  && this.state.boundValue != null ?  this.state.boundValue : "" ;


        return <input className="form-control input-sm" 
                           type="number"  
                           id={this.props.dataElement}
                            value={assignedValue} 
                            onChange={this.handleChange} />
    }
}

export default NumericInput;