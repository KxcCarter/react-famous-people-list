import React, { Component } from 'react';

class FamousPersonForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          value={this.props.value.name}
          id="name-input"
          onChange={(event) => this.props.handleChange(event, 'name')}
        />
        <label htmlFor="role-input">Famous for:</label>
        <input
          value={this.props.value.role}
          id="role-input"
          onChange={(event) => this.props.handleChange(event, 'role')}
        />
        <button type="submit">Done</button>
      </form>
    );
  }
}

export default FamousPersonForm;
