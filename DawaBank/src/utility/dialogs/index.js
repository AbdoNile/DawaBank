import React from 'react';

import ConfirmDialog from './confirmDialog';
      
import {  toast } from "react-toastify";

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

    alert( message){
        toast("Wow so easy !");
    }

}
var dialog = new Dialog();
export { dialog }; 