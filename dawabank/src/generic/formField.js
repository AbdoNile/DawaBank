import React from 'react';

import TextInput from './controls/textInput';
import DateInput from './controls/dateInput';
import NumericInput from './controls/numericInput';
import CheckInput from './controls/checkInput';

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
            inputControl = <DateInput label={label} type={type} />
        break;
         case "number":
            inputControl = <NumericInput label={label} type={type} />
        break;
        case "checkbox":
            inputControl = <CheckInput label={label} type={type} />
        break;
    }
    var decoratedInputControl = React.cloneElement(inputControl, {
                  dataContext: this.props.dataContext,
                  dataElement: this.props.dataElement,
                  boundValue:  this.props.dataContext[this.props.dataElement],
                  emitChangesToForm : this.props.emitChangesToForm
               
                });
    return (decoratedInputControl)
  }

  
}

export default FormField;
