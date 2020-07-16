import React, { Component } from 'react';
import styles from '../FamousPerson/FamousPerson.module.css';

class FamousPerson extends Component {
  render() {
    return (
      <div className={styles.famousPerson}>
        <p>
          {this.props.person.name} is famous for "{this.props.person.role}".
        </p>
      </div>
    );
  }
}

export default FamousPerson;
