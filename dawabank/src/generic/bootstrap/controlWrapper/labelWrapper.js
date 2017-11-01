import React from 'react';

class LabelWrapper extends React.Component {
  
  render() {
        let child = React.cloneElement(this.props.children, this.props);
  
    return  (
    	<div className={child.props.wrapperClass}>
        <div className="form-group">
            <label htmlFor={child.props.dataElement}>
                {child.props.label}
            </label>
            {child}
        </div>
    </div>) ;
  }
}

export default LabelWrapper;
