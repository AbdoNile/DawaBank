import React from 'react';

class FormField extends React.Component {
    constructor(props) {
    super(props);
    this.dataElement = this.props.dataElement;
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    this.setState({ [this.dataElement] : event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state[this.dataElement]);
    event.preventDefault();
  }

  render() {
    let fieldLabel = this.props.label;
    let fieldType = this.props.type;
    let inputControl;
    switch(fieldType){
        case "text":
        default:
            inputControl = <input className="form-control input-sm" type="text" value={this.state[this.dataElement]} />;
        break
        case "date":
            inputControl = <input className="form-control input-sm" type="date" value={this.state[this.dataElement]} />;
        break;
         case "number":
            inputControl = <input className="form-control input-sm" type="number"  value={this.state[this.dataElement]}/>;
        break;
    
    }

    if(fieldType === "checkbox"){
       return  <div className="form-group">
                        <div className="col-sm-offset-2">
                            <div className="checkbox">
                                <label className="control-label">
                                    <input type="checkbox"
                                     value={this.state[this.dataElement]}
                                    /> {fieldLabel}</label>
                            </div>
                        </div>
                    </div>
    }

    return  <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">{fieldLabel}</label>
                        </div>
                        <div className="col-sm-8">
                            {inputControl}
                            
                        </div>
                    </div>;
  }

  
}

export default FormField;
