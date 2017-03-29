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
            inputControl = <TextInput {...this.props}  />
        break
        case "date":
            inputControl = <DateInput {...this.props}  />
        break;
         case "number":
            inputControl = <NumericInput {...this.props}  />
        break;
        case "checkbox":
            inputControl = <CheckInput  {...this.props}  hasLabel />
        break;
    }
  
    return (<Wrapper>{inputControl}</Wrapper>);
  }

  
}

export default FormField;
