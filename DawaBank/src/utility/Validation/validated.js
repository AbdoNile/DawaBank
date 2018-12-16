import React from 'react';
import { Glyphicon } from 'react-bootstrap';
class Validated extends React.Component {


    render() {
        var icon , message = null
    
        if (this.props.context != null) {
            var context = this.props.context;
            if (context.valid) {
                icon = <Glyphicon glyph='ok' className="form-control-feedback" />;
            }
            else {
                icon = <Glyphicon glyph='exclamation-sign' className="form-control-feedback"/>;
                message = <label className="control-label" htmlFor="inputWarning2">{context.message}</label>;
            }

            var chidlControl = React.Children.map(this.props.children, child =>
                React.cloneElement(child, { className: "form-control", "aria-describedby": "inputWarning2Status" }));

            return <div className="form-group has-warning has-feedback">
               
                {chidlControl}
                {icon}
                {message}
              
            </div>
       }

       else{
           return this.props.children
       }
    }
}

export default Validated;