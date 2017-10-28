import React from 'react';
import _ from 'lodash';
import LabelWrapper from './labelWrapper';

class Wrapper extends React.Component {
   render() {
    let child = React.cloneElement(this.props.children, this.props);
    if(child.props.hasLabel !== true){
        return <LabelWrapper >{child}</LabelWrapper>
    }
    else
    {
        return ( child);
    }
  }
}

export default Wrapper;
