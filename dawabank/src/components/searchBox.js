import React from 'react';

class SearchBox extends React.Component {
 

  render() {
    return <div className="row">
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search For Medicine</h3></div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-3">
                                    <label className="control-label">Medicine Name</label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control input-sm" type="text" autocomplete="on"/>                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-3">
                                    <label className="control-label">Location </label>
                                </div>
                                <div className="col-sm-8">
                                    <input className="form-control input-sm" type="text" autocomplete="on"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2">
                                    <button className="btn btn-primary" type="button">Search </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>;
  }

 
}

export default SearchBox;
