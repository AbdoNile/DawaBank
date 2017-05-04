import React from 'react';
import baseControl from './baseControl';
class FormContainer extends baseControl {
    
 
  liftStateUp = (datum) => {
    var newContext =  Object.assign({}, this.state.boundValue , datum);
     this.handleChange({target :{ value : newContext } });
  }

  render() {
    const childrenToRender = React.Children.map(this.props.children,
     (child) => {
                return React.cloneElement(child, {
                  boundValue:   this.state.boundValue != null ? this.state.boundValue[child.props.dataElement] : null,
                  onChange : this.liftStateUp
                })
        }
    );
    return   <div className="form-horizontal">
                  {childrenToRender}
              </div>;
  }
}

export default FormContainer;
