import React from 'react';
import baseControl from './baseControl';
class FormContainer extends baseControl {
  constructor() {
    super();
  }

  handleChange(updateEvent) {
    var newContext =  Object.assign({}, this.state.dataContext);
    newContext[updateEvent.dataElement] = updateEvent.value;
    this.setState({ dataContext: newContext });
  }


  render() {
    const childrenToRender = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
                  dataContext: this.state.dataContext ? this.state.dataContext : {},
                  updateContext : this.handleChange
                })
    );
    return   <form className="form-horizontal">
                  {childrenToRender}

                  <pre>{JSON.stringify(this.state.dataContext, null, 2) }</pre>
              </form>;
  }
}

export default FormContainer;
