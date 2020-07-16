import React, { Component } from 'react';

class FamousPersonList extends Component {
  render() {
    return (
      <ul>
        {/* The list should go here. */}
        {this.props.people}
      </ul>
    );
  }
}

export default FamousPersonList;
