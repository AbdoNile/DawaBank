import React from 'react';

class baseControl extends React.Component {
      constructor(props) {
        super(props);
        this.state = {boundValue: props.boundValue};
        
        this.handleChange = this.handleChange != null ? this.handleChange.bind(this) : null; 
        
        this.fieldLabel = props.label;
        this.dataElement = props.dataElement;
        
    }
    
    handleChange(event) {
        let currentValue = this.extractCurrentValue(event);
        this.setState({ boundValue: currentValue});
        this.props.emitChanges({ [this.dataElement] : currentValue});
    }

    extractCurrentValue = (event) => {
        return event.target.value;
    }
}

export default baseControl;
