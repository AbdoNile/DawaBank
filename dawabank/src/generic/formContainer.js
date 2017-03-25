import React from 'react';
import baseControl from './baseControl';
class FormContainer extends baseControl {
  constructor(props) {
    super(props);
   this.state = {dataContext : props.boundValue}
  }

  handleChange(event) {
    event.preventDefault();
    this.props.updateContext(this.state.dataContext);
  }

  updateFormState = (updateEvent) => {
    var newContext =  Object.assign({}, this.state.dataContext);
    newContext[updateEvent.dataElement] = updateEvent.value;
    this.setState({ dataContext: newContext });
    
  }


  render() {
    const childrenToRender = React.Children.map(this.props.children,
     (child) => {
                if(child.type.name === "FormField"){
                return React.cloneElement(child, {
                  dataContext: this.state.dataContext ? this.state.dataContext : {},
                  emitChangesToForm : this.updateFormState
                }
                )}
                else
                {
                  return child;
                }
     }
    );
    return   <form className="form-horizontal" onSubmit={this.handleChange}>
                  {childrenToRender}
              </form>;
  }
}

export default FormContainer;
