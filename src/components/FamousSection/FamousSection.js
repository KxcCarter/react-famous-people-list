import React, { Component } from 'react';
import './FamousSection.css';

import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';
import FamousPerson from '../FamousPerson/FamousPerson';

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
    return (
      <section className="new-person-section">
        <FamousPersonForm
          value={this.state.famousPerson}
          handleChange={this.handleChangeFor}
          handleSubmit={this.addPerson}
        />

        <FamousPerson person={this.state.famousPerson} />
        <FamousPersonList people={this.state.people} />
      </section>
    );
  }
}

export default FamousSection;
