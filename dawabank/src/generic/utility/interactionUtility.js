import React from 'react';

import ConfirmDialog from '../interaction/confirmDialog';

class InteractionUtility {

    static confirm(component, properties){
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

export default InteractionUtility; 