import React from 'react';

import TextInput from './bootstrap/controls/textInput';
import DateInput from './bootstrap/controls/dateInput';
import NumericInput from './bootstrap/controls/numericInput';
import CheckInput from './bootstrap/controls/checkInput';
import Wrapper from './bootstrap/controlWrapper/wrapper';

class FormField extends React.Component {
  render() {
    let inputControl;
    switch(this.props.type){
        case "text":
        default:
            inputControl = <TextInput  />
        break
        case "date":
            inputControl = <DateInput  />
        break;
         case "number":
            inputControl = <NumericInput   />
        break;
        case "checkbox":
            inputControl = <CheckInput  />
        break;
    }
  
    return (<Wrapper {...this.props}  >{inputControl}</Wrapper>);
  }

  
}

export default FormField;
