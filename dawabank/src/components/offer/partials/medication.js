import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import ProductLookup from '../../common/productLookup';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';
import Validated from '../../../utility/Validation/validated'
class Medication extends React.Component {


  updateStateWithValue = (field, value) => {
    this.props.onChange({ [field]: value });
  }

  render() {
    const parseStateToValue = state => moment(state, 'YYYY-MM-DD')
    var medication = this.props.initialData || {};
    var validationContext = this.props.validationContext || {};
    return (
      <div >
        <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="product" labelText="Product">
        <Validated context={validationContext["product"]}>
          <ProductLookup
            onChange={(product) => this.updateStateWithValue("product", product)} value={medication.product} />
            </Validated>
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="expiryDate" labelText="Expiry Date">
        <Validated context={validationContext["expiryDate"]}>
         <DatePicker className="form-control input-sm" id="expiryDate"
            type="date" selected={parseStateToValue(medication.expiryDate)}
            onChange={(e) => this.updateStateWithValue("expiryDate", e)} />
            </Validated>
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="quantity" labelText="Quantity">
          <Validated context={validationContext["quantity"]}>
            <input className="form-control input-sm" type="number" min="1"
              id="quantity" value={medication.quantity}
              onChange={(e) => this.updateStateWithValue("quantity", e.target.value)} />
          </Validated>
        </LabelWrapper>
      </div>
    )
  }
}

export default Medication;
