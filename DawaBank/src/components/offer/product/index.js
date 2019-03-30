import React from 'react';
import Editor from './editor';
import Viewer from './viewer';
class Index extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    showEditor = () => {
        this.setState({ mode: "edit" });
    }

    showViewer = () => {
        this.setState({ mode: "view" })
    }

    render() {
        switch (this.state.mode) {
            case "edit":
                return <Editor showViewer={this.showViewer} />;
            default:
            case "view":
                return  <div>
                <Viewer showViewer={this.showViewer} />
                <button type="button" className="btn btn-Edit" onClick={this.showEditor}>Edit</button>
            </div>;
        }
    }
}

export default Index;