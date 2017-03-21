import React from 'react';
import FormField from '../../generic/formField';
class Offer extends React.Component {
 

  render() {
    return <div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Add Donated Medicine</h3></div>
            </div>
        <div className="row">
            <div>
                <form className="form-horizontal">
                     <FormField  label="Medicine Name" type="text" />
                     <FormField  label="Expiry Date" type="date" />
                     <FormField  label="Quanity" type="number" />
                     <FormField  label="I have read and agreed to the websites rules and guidelines" type="checkbox" />
                     <div className="form-group">
                        <div className="col-sm-offset-2">
                            <button className="btn btn-primary btn-sm" type="button">Add </button>
                            <button className="btn btn-default" type="button">Cancel </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Offer;
