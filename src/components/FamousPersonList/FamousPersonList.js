import React, { Component } from 'react';
import styles from '../FamousPersonList/FamousPersonList.module.css';

class FamousPersonList extends Component {
  render() {
    const peopleLi = this.props.people.map((item, index) => {
      return (
        <li key={index}>
          {item.name} is famous for {item.role}
        </li>
      );
    });

    return (
      <div className={styles.container}>
        <ul>{peopleLi}</ul>
      </div>
    );
  }
}

export default FamousPersonList;
