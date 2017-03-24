import React from 'react';
import baseControl from '../baseControl';
class TextInput extends baseControl {
        constructor() {
        super();
        
       
    }


    render() {
        let assignedValue = this.state.boundValue;

        return ( <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">{this.fieldLabel}</label>
                        </div>
                        <div className="col-sm-8">
                            <input className="form-control input-sm" type="text" value={assignedValue} 
                            onChange={this.handleChange}
                            />
                            
                        </div>
                    </div>
        );
    }

    
}

export default TextInput;