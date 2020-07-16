import React, { Component } from 'react';
import './FamousSection.css';

import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';

class FamousSection extends Component {
  state = {
    famousPerson: {
      name: '',
      role: '',
    },
    people: [
      {
        name: 'Alfed Nobel',
        role: 'Dynamite',
      },
    ],
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      famousPerson: {
        ...this.state.famousPerson,
        [propertyName]: event.target.value,
      },
    });
  };

  addPerson = (event) => {
    event.preventDefault();
    console.log(`The famous person is `, this.state.famousPerson);
    this.setState({
      people: [...this.state.people, this.state.famousPerson],
      famousPerson: {
        name: '',
        role: '',
      },
    });
  };

  render() {
    const peopleLi = this.state.people.map((item, index) => {
      return (
        <li key={index}>
          {item.name} is famous for {item.role}
        </li>
      );
    });

    return (
      <section className="new-person-section">
        {/* <form onSubmit={this.addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input
            value={this.state.famousPerson.name}
            id="name-input"
            onChange={(event) => this.handleChangeFor(event, 'name')}
          />
          <label htmlFor="role-input">Famous for:</label>
          <input
            value={this.state.famousPerson.role}
            id="role-input"
            onChange={(event) => this.handleChangeFor(event, 'role')}
          />
          <button type="submit">Done</button>
        </form> */}

        <FamousPersonForm
          value={this.state.famousPerson}
          handleChange={this.handleChangeFor}
          handleSubmit={this.addPerson}
        />

        <p>
          {this.state.famousPerson.name} is famous for "{this.state.famousPerson.role}".
        </p>
        <ul>
          {/* The list should go here. */}
          {peopleLi}
        </ul>
      </section>
    );
  }
}

export default FamousSection;
