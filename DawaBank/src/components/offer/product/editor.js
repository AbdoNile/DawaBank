import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import ProductLookup from '../../common/productLookup';
import LabelWrapper from '../../../generic/bootstrap/controlWrapper/labelWrapper';
import Validated from 'utility/Validation/validated';
import { validator } from '../../../utility/Validation';
import offerService from '../../../services/offerService';
class Editor extends React.Component {

  constructor() {
    super();
    this.state = { };
  }

  componentDidMount = () => {
    this.setState(this.props.initialDate);
  }

  update = (field, value) => {
    this.setState({ [field]: value });
  }

  save = () => {
    let data = this.state;

    validator.validate(data, offerService.Validations.donation).then((r) => {
     
      this.setState({ validationResult: r });
      offerService.saveMedication(this.props.offerId, data).then(result => {
        this.props.history.push('/MyOffers');
      });
    }).catch(r => {
      this.setState({ validationResult: r });
    });
  }

  render() {
    const parseStateToValue = function (state) {
      if (state) {
        return moment(state, 'YYYY-MM-DD');
      }
      else{
        return (moment());
      }
    }

    var medication = this.state || {};
    var validationResult = this.state.validationResult || {};
    return (
      <div >
           {<pre> {JSON.stringify(this.state, null, 2)}</pre> }
    
        <LabelWrapper wrapperClass="col-sm-12 col-lg-6" controlId="product" labelText="Product">
          <Validated context={validationResult["product"]}>
            <ProductLookup
              onChange={(product) => this.update("product", product)} value={medication.product} />
          </Validated>
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="expiryDate" labelText="Expiry Date">
          <Validated context={validationResult["expiryDate"]}>
            <DatePicker className="form-control input-sm" id="expiryDate"
              type="date" selected={parseStateToValue(medication.expiryDate)}
              onChange={(e) => this.update("expiryDate", e)} />
          </Validated>
        </LabelWrapper>
        <LabelWrapper wrapperClass="col-sm-12 col-lg-3" controlId="quantity" labelText="Quantity">
          <Validated context={validationResult["quantity"]}>
            <input className="form-control input-sm" type="number" min="1"
              id="quantity" value={medication.quantity}
              onChange={(e) => this.update("quantity", e.target.value)} />
          </Validated>
        </LabelWrapper>
        <button type="button" className="btn btn-success" onClick={this.save}>Save</button>
        <button type="button" className="btn btn-basic"  onClick={this.props.showViewer}>Cancel</button>

      </div>
    )
  }
}

export default Editor;
