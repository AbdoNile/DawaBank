import React from 'react';
import Autocomplete from 'react-autocomplete';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';
import medicationService from 'services/medicationService';

class ProductLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      searchTerm: ''
    };
  }

  clearSelection = () => {
    this.onSelect("", null);
  }

  findSuggestions = (event, searchTerm) => {
    this.setState({ searchTerm });
    // if the user clears input box .. set the selected value to null
    if (searchTerm === null || searchTerm.length === 0) {
      this.onSelect(searchTerm, null);
      return;
    }

    this.setState({ searchTerm })
    if (searchTerm.length > 2) {
      medicationService
        .FindMedication(searchTerm)
        .then((items) => {
          this.setState({ suggestions: items });
        });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  onSelect = (searchTerm, item) => {
    this.props.onChange(item);
    this.setState({ "searchTerm": null });
  };

  renderSelectedItemsSummary = (props) => {
    if (props.item.id != null) {
      return <Label onClick={this.clearSelection} bsStyle="primary">{props.item.tradeName} </Label>;
    }
    return null;
  }


  renderMenuControl = (items, value, style) => {
    return <ListGroup
      style={{
        "zIndex": + 20,
        position: "absolute",
        minWidth: style.minWidth
      }}
      children={items} />;
  }

  renderItemControl = (item, isHighlighted) => {
    return <ListGroupItem header={item.tradeName} active={isHighlighted} key={item.medicationId}>
      {item.genericName}
    </ListGroupItem>
  };

  render() {
    var selectedItem = this.props.value || {};
    var selectedValue = selectedItem.tradeName;

    if (this.state.searchTerm !== null && this.state.searchTerm !== '') {
      selectedValue = this.state.searchTerm;
    }

    const selectedItemSummary = <this.renderSelectedItemsSummary item={selectedItem} />
    return (
      <div>
        <Autocomplete
          wrapperProps={{ style: { display: "block" } }}
          inputProps={{
            className: "form-control",
            placeholder: "Enter a name of a pharmacuitecal product"
          }}
          autoHighlight={true}
          ref="autocomplete"
          value={selectedValue}
          items={this.state.suggestions}
          getItemValue={(item) => item.tradeName}
          onSelect={this.onSelect}
          onChange={this.findSuggestions}
          renderMenu={this.renderMenuControl}
          renderItem={this.renderItemControl} />
        {selectedItemSummary}
      </div>
    )
  }
}

export default ProductLookup;
