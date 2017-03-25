import React from 'react';
import baseControl from '../baseControl';

class CheckInput extends baseControl {
  constructor(props) {
        super(props);
        this.state = {boundValue: props.boundValue};
       
        
    }
    
    extractCurrentValue = (event) => {
        return event.target.checked;
    }

    render() {
         let assignedValue = this.state.boundValue;
        return  <div className="form-group">
                        <div className="col-sm-offset-2">
                            <div className="checkbox">
                                <label className="control-label">
                                    <input type="checkbox"
                                     checked={assignedValue}
                                       onChange={this.handleChange}
                                    /> {this.fieldLabel}</label>
                            </div>
                        </div>
                    </div>
  }

 
}

export default CheckInput;
