import React from 'react';

class baseControl extends React.Component {
      constructor(props) {
        super(props);
        this.state = {boundValue: props.boundValue};
        this.handleChange = this.handleChange != null ? this.handleChange.bind(this) : null; 
        this.emitChange = this.emitChange != null ? this.emitChange.bind(this) : null; 
          this.fieldLabel = props.label;
         this.dataElement = props.dataElement;
        
    }
    
    handleChange(event) {
        let currentValue = this.extractCurrentValue(event);
        this.setState({ boundValue: currentValue});
        this.props.emitChangesToForm({ value : currentValue , dataElement :   this.dataElement});
        
    }

    extractCurrentValue = (event) => {
        return event.target.value;
    }


    emitChange(fieldValue){
      
    }

    

    getInitialState () {
      return { boundValue: this.props.boundValue};
   }

    
}

export default baseControl;
