import React from 'react';

import LabelWrapper from './labelWrapper';

class Wrapper extends React.Component {
   render() {
    let childrenToRender = React.cloneElement(this.props.children, this.props);
    if(childrenToRender.props.hasLabel !== true){
        return <LabelWrapper>{childrenToRender}</LabelWrapper>
    }
    else
    {
        return ( childrenToRender);
    }
  }
}

export default Wrapper;
