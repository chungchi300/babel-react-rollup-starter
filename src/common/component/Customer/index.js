import React from 'react';
import PropTypes from 'prop-types';
export default class Customer extends React.Component {
  static propTypes = {
    customer: PropTypes.object.isRequired
  };
  render () {
    return (
      <span>
        {this.props.customer.name}
        {' '}
        -
        {' '}
        {this.props.customer.isVip ? 'Vip' : 'Normal'}
      </span>
    );
  }
}
