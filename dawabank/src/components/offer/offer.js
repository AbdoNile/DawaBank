import React from 'react';

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
                    <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">Medicine Name</label>
                        </div>
                        <div className="col-sm-8">
                            <input className="form-control input-sm" type="text" autocomplete="on" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">Expirty Date</label>
                        </div>
                        <div className="col-sm-8">
                            <input className="form-control input-sm" type="date" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-4">
                            <label className="control-label">Quantity </label>
                        </div>
                        <div className="col-sm-8">
                            <input className="form-control input-sm small" type="number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2">
                            <div className="checkbox">
                                <label className="control-label">
                                    <input type="checkbox"/> I have read and agreed to the websites rules and guidelines</label>
                            </div>
                        </div>
                    </div>
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
