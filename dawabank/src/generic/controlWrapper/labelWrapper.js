import React from 'react';

class LabelWrapper extends React.Component {
  
  render() {
    return  (<div className="form-group">
                <div className="col-sm-4">
                    <label className="control-label">{this.props.children.props.label}</label>
                </div>
                <div className="col-sm-8">
                    {this.props.children}
                </div>
            </div>) ;
  }
}

export default LabelWrapper;
