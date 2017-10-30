import React from 'react';
import Autocomplete from 'react-autocomplete';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import baseControl from 'generic/baseControl';
import medicationService from 'services/medicationService';

class ProductLookup extends baseControl {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchTerm: '',
      loading: true
    };
  }

  findSuggestions = (event, searchTerm) => {
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

  extractCurrentValue = (event) => {
    return event;
  }

  onSelect = (searchTerm, item) => {
    this.handleChange({item});
    this.setState({searchTerm: item.searchableName});
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
    return (
        <Autocomplete
        wrapperProps={{ style : { display : "block"}}}
        inputProps={{
            className: "form-control"
        }}
        autoHighlight={true}
        ref="autocomplete"
        value={this.state.searchTerm}
        items={this.state.suggestions}
        getItemValue={(item) => item.medicationId}
        onSelect={this.onSelect}
        onChange={this.findSuggestions}
        renderMenu={this.renderMenu}
        renderItem={this.renderItem} />
    )
  }
}

export default ProductLookup;
