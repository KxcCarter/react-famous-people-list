import React, { Component } from 'react';

class FamousPerson extends Component {
  render() {
    return (
      <p>
        {this.props.person.name} is famous for "{this.props.person.role}".
      </p>
    );
  }
}

export default FamousPerson;
