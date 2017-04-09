import React from 'react';

import TextInput from './controls/textInput';
import DateInput from './controls/dateInput';
import NumericInput from './controls/numericInput';
import CheckInput from './controls/checkInput';
import Wrapper from './controlWrapper/wrapper';

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
            inputControl = <CheckInput   hasLabel />
        break;
    }
  
    return (<Wrapper {...this.props} >{inputControl}</Wrapper>);
  }

  
}

export default FormField;
