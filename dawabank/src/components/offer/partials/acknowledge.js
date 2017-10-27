import React from 'react';
import FormField from 'generic/formField';
import FormContainer from 'generic/formContainer'

class Acknowledge extends React.Component {
  constructor(props) {
    super(props);
        this.state = {acknowledge : this.props.acknowledge};
  }

  render() {
    return      <FormContainer className="form-horizontal" boundValue={this.state.acknowledge} onChange={this.props.onUpdate} dataElement="acknowledge" >
                    <FormField  label="I have read and agreed to the websites rules and guidelines" type="checkbox" dataElement='agreed' />
            </FormContainer>;
  }
}

export default Acknowledge;
