import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import ProductLookup from '../../common/productLookup';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';

class Medication extends React.Component {
  constructor(props) {
    super(props);
   }

  updateStateWithValue = (field, value) => {
    this.props.onChange({ [field]: value });
  }
  
  render() {
    const parseStateToValue = state => moment(state, 'YYYY-MM-DD')
    var medication = this.props.initialData || {};
    var expiryDate = medication.expiryDate;
    return (
      <div >
        <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="product" labelText="Product">
          <ProductLookup
            onChange={(product) => this.updateStateWithValue("product", product)} />
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="expiryDate" labelText="Expiry Date">
          <DatePicker className="form-control input-sm" id={this.props.dataElement}
            type="date"
            selected={parseStateToValue(expiryDate)}
            onChange={(e) => this.updateStateWithValue("expiryDate", e)} />
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="quantity" labelText="Quantity">
          <input className="form-control input-sm" type="number"
            id="quantity" value={medication.quantity}
            onChange={(e) => this.updateStateWithValue("quantity", e.target.value)} />
        </LabelWrapper>
      </div>
    )
  }
}

export default Medication;
