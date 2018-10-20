import React from 'react';
import Autocomplete from 'react-autocomplete';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import medicationService from 'services/medicationService';

class ProductLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchTerm: '',
      loading: true
    };
  }


  findSuggestions = (event, searchTerm) => {
    if(searchTerm == null || searchTerm.length == 0){
      this.onSelect(searchTerm, null);
      return;
    }

    this.setState({searchTerm, loading: true})
    if (searchTerm.length > 2) {
      medicationService
        .FindMedication(searchTerm)
        .then((items) => {
          this.setState({suggestions: items, loading: false});
        });
    } else {
      this.setState({suggestions: [], loading: false});
    }
  };

  onSelect = (searchTerm, item) => {
    this.props.onChange(item);
    if(item != null) {
      searchTerm = item.tradeName 
    }
    
    this.setState({searchTerm});
  };

  renderMenu = (items, value, style) => {
    return <ListGroup
      style={{
      "zIndex": + 20,
      position: "absolute",
      minWidth: style.minWidth
    }}
      children={items}/>;
  }

  renderItem = (item, isHighlighted) => {
    return <ListGroupItem header={item.tradeName} active={isHighlighted} key={item.medicationId}>
      {item.genericName}
    </ListGroupItem>
  };

  render() {
    const suggestions = this.state != null && this.state.suggestions ? this.state.suggestions : [];
    let selectedItem = this.state != null  && this.state.boundValue != null ?  this.state.boundValue : null ;
    let searchTerm = this.state != null  && this.state.searchTerm != null ?  this.state.searchTerm : null ;
    let autoCompleteBoxText = selectedItem != null ? selectedItem.ProductName : searchTerm;
     return (
        <Autocomplete
        wrapperProps={{ style : { display : "block"}}}
        inputProps={{
            className: "form-control",
            placeholder : "Enter a name of a pharmacuitecal product"
        }}
        autoHighlight={true}
        ref="autocomplete"
        value={autoCompleteBoxText}
        items={suggestions}
        getItemValue={(item) => item.medicationId}
        onSelect={this.onSelect}
        onChange={this.findSuggestions}
        renderMenu={this.renderMenu}
        renderItem={this.renderItem} />
    )
  }
}

export default ProductLookup;
