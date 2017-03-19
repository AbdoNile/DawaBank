import React from 'react';
import ListItem from './listItem';
class ListContainer extends React.Component {
 

  render() {
    let offers = this.props.offers;
    const offersTags = offers ? offers.map(function(offer){
        return <ListItem offer={offer}/>
    }) : null;
    return <div className="row">
            <div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Medication </th>
                                <th>Quantity </th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {offersTags}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>;
  }

 
}

export default ListContainer;
