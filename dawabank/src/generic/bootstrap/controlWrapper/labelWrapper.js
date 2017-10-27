import React from 'react';

class LabelWrapper extends React.Component {
  
  render() {
        let childrenToRender = React.cloneElement(this.props.children, this.props);
  
    return  (<div className="form-group">
                <div className="col-sm-4">
                    <label className="control-label">{childrenToRender.props.label}</label>
                </div>
                <div className="col-sm-8">
                    {childrenToRender}
                </div>
            </div>) ;
  }
}

export default LabelWrapper;
