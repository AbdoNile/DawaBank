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
                if(child.type.prototype == null){
                  return child;
                }
                else{

                return React.cloneElement(child, {
                  boundValue:   this.state.boundValue != null ? this.state.boundValue[child.props.dataElement] : null,
                  onChange : this.liftStateUp
                });
              }
        }
    );
    return   <div>
                  {childrenToRender}
              </div>;
  }
}

export default FormContainer;
