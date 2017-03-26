import React from 'react';
import {Modal, Button} from 'react-bootstrap';
class ConfirmDialog extends React.Component {
 constructor() {
    super();
        this.state = { showModal: true};
  }

    onNo = ()  => {
        this.setState({ showModal: false });
        this.props.OnCancel();
    }

    onYes = ()  => {
        this.setState({ showModal: false });
        this.props.OnConfirm();
    }

  render() {
    var modal = this.props.modal;
    modal.heading = modal.heading ? modal.heading : "Confirm";
    
    modal.yesCaption = modal.yesCaption ? modal.yesCaption : "Yes";
    modal.noCaption = modal.noCaption ? modal.noCaption : "No";
    return <div>

    <Modal show={this.state.show} onHide={this.onNo} animation={true} >
          <Modal.Header closeButton>
            <Modal.Title>{modal.heading} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                {modal.body}  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onYes}>{modal.yesCaption}</Button>
            <Button onClick={this.onNo}>{modal.noCaption}</Button>
          </Modal.Footer>
        </Modal>

    </div>


  }
  
}

export default ConfirmDialog;
