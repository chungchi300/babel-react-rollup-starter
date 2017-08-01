import React from 'react';
import {double} from 'helper/weightCalculation';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Customer from 'component/Customer';
import Price from 'component/Price';
import Product from 'component/Product';
import * as Action from 'action';
export class Shop extends React.Component {
  static propTypes = {
    sandWichNo: PropTypes.number.isRequired,
  };
  static defaultProps = {
    companyName: 'Subway',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <h1>
          <Customer customer={this.props.customer} /> -
          {this.props.companyName}
        </h1>
        <Product />
        <div onClick={this.props.addSandWich}>Click me to order</div>
        <Price sandWichNo={this.props.sandWichNo} />
      </article>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //
  return {sandWichNo: state.sandWichNo, customer: state.customer};
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return {addSandWich: () => dispatch(Action.addSandWich())};
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
