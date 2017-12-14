import React from 'react';
import baseControl from './baseControl';
import GroupContainer from './bootstrap/groupContainer'
class FormContainer extends baseControl {
    
  handleChange(event) {
    let currentValue = this.extractCurrentValue(event);
    this.currentValue = currentValue;
    this.props.onChange({ [this.dataElement] : currentValue});
  }

  liftStateUp = (datum) => {
    var newContext =  Object.assign({}, this.currentValue , datum);
     this.handleChange({target :{ value : newContext } });
  }

  render() {
    const boundValue = this.props.boundValue;
    const childrenToRender = React.Children.map(this.props.children,
     (child) => {
                  var appenedProperties = {
                     onChange : this.liftStateUp
                  };

                  if(child.props.dataElement != null){
                    if(boundValue != null && boundValue[child.props.dataElement]){
                    appenedProperties.boundValue =  boundValue[child.props.dataElement];
                  }
                }
                 
                return React.cloneElement(child, appenedProperties);
               
        }, this);
    return   <GroupContainer> {childrenToRender} </GroupContainer>;
  }
}

export default FormContainer;
