import React from 'react';

class baseControl extends React.Component {
      constructor() {
        super();
        this.state = {};
        this.handleChange = this.handleChange != null ? this.handleChange.bind(this) : null; 
    }
    
    handleChange(event) {
        this.setState({ boundValue: event.target.value});
        this.props.updateContext({ value : event.target.value, dataElement : this.dataElement });
    }
    

    getInitialState () {
      return { boundValue: this.props.boundValue};
   }

    componentWillReceiveProps(props) {
         this.fieldLabel = this.props.label;
         this.dataElement = this.props.dataElement;
         this.setState({boundValue: props.boundValue});
    }

  
}

export default baseControl;
