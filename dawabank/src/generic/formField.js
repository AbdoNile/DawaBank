import React from 'react';

import TextInput from './controls/textInput';
import DateInput from './controls/dateInput';
import NumericInput from './controls/numericInput';

class FormField extends React.Component {
    constructor(props) {
    super(props);
    this.dataElement = this.props.dataElement;
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({ [this.dataElement] : event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state[this.dataElement]);
    event.preventDefault();
  }

  render() {
    let label = this.props.label;
    let type = this.props.type;
    let inputControl;
    switch(type){
        case "text":
        default:
            inputControl = <TextInput label={label} type={type} />
        break
        case "date":
            inputControl = <DateInput label={label} type={type} />;
        break;
         case "number":
            inputControl = <NumericInput label={label} type={type} />;
        break;
    
    }

    if(fieldType === "checkbox"){
       return  <div className="form-group">
                        <div className="col-sm-offset-2">
                            <div className="checkbox">
                                <label className="control-label">
                                    <input type="checkbox"
                                     value={this.state[this.dataElement]}
                                    /> {fieldLabel}</label>
                            </div>
                        </div>
                    </div>
    }

    return  <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">{fieldLabel}</label>
                        </div>
                        <div className="col-sm-8">
                            {inputControl}
                            
                        </div>
                    </div>;
  }

  
}

export default FormField;
