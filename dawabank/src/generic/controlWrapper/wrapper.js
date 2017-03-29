import React from 'react';

import LabelWrapper from './labelWrapper';

class Wrapper extends React.Component {
   render() {
    if(this.props.children.props.hasLabel !== true){
        return <LabelWrapper>{this.props.children}</LabelWrapper>
    }
    else
    {
        return ( this.props.children );
    }
  }
}

export default Wrapper;
