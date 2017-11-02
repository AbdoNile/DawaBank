import React from 'react';
import baseControl from './baseControl';
import GroupContainer from './bootstrap/groupContainer'
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
                  boundValue:   this.props.boundValue != null ? this.props.boundValue[child.props.dataElement] : null,
                  onChange : this.liftStateUp
                });
              }
        }
    );
    return   <GroupContainer> {childrenToRender} </GroupContainer>;
  }
}

export default FormContainer;
