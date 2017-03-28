import React from 'react';
import baseControl from './baseControl';
class FormContainer extends baseControl {
    
  extractCurrentValue = (event) => {
    return this.state.boundValue;
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.handleChange(event)
  }


  updateOwnState = (datum) => {
    var newContext =  Object.assign({}, this.state.boundValue , datum);
    this.setState({ boundValue: newContext });
    
  }

  render() {
    const childrenToRender = React.Children.map(this.props.children,
     (child) => {
                if(true){
                return React.cloneElement(child, {
                  boundValue:  this.props.boundValue[child.props.dataElement],
                  emitChanges : this.updateOwnState
                }
                )}
                else
                {
                  return child;
                }
     }
    );
    return   <div className="form-horizontal" onSubmit={this.onFormSubmit}>
                  {childrenToRender}
              </div>;
  }
}

export default FormContainer;
