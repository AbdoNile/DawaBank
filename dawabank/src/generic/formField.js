import React from 'react';

import TextInput from './controls/textInput';
import DateInput from './controls/dateInput';
import NumericInput from './controls/numericInput';
import CheckInput from './controls/checkInput';

class FormField extends React.Component {
  render() {
    let inputControl;
    switch(this.props.type){
        case "text":
        default:
            inputControl = <TextInput />
        break
        case "date":
            inputControl = <DateInput  />
        break;
         case "number":
            inputControl = <NumericInput  />
        break;
        case "checkbox":
            inputControl = <CheckInput  />
        break;
    }
    var decoratedInputControl = React.cloneElement(inputControl, {
                  dataElement: this.props.dataElement,
                  boundValue:  this.props.boundValue,
                  emitChanges : this.props.emitChanges,
                  label : this.props.label,
                  type : this.props.type
               
                });
    return (decoratedInputControl)
  }

  
}

export default FormField;
