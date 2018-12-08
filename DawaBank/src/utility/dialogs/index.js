import React from 'react';

import ConfirmDialog from './confirmDialog';

class Dialog {

    confirm(component, properties){
        var promise = new Promise(function(resolve , reject){
             let confirmHandler = () => {
                 resolve(true);
             }

            let cancelHandler = () => {
                 reject(false);
             }

             component.setState({confirm : <ConfirmDialog modal={properties}  onConfirm={confirmHandler} onCancel={cancelHandler} />});
        });
        


        return promise;
    }

}
var dialog = new Dialog();
export default dialog; 