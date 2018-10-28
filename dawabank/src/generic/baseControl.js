import React from 'react';

class baseControlX extends React.Component {
      constructor(props) {
        super(props);
        
        
        this.handleChange = this.handleChange != null ? this.handleChange.bind(this) : null; 
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this); 
        
        this.fieldLabel = props.label;
        this.dataElement = props.dataElement;
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({boundValue:  nextProps.boundValue});
        this.currentValue = nextProps.boundValue;
    }
    
    handleChange(event) {
        let currentValue = this.extractCurrentValue(event);
        this.setState({boundValue: currentValue});
        this.props.onChange({ [this.dataElement] : currentValue});
    }

    extractCurrentValue = (event) => {
        return event.target.value;
    }
}

export default baseControlX;
