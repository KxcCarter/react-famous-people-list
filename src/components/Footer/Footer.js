import React, { Component } from 'react';
import styles from './Footer.module.css';
let date = new Date();
class Footer extends Component {
  render() {
    return (
      <footer className="Header-main">
        <p className={styles.tiny}>
          Kenneth R Carter{' '}
          <span role="img" aria-label="copyright">
            ©️
          </span>{' '}
          {date.getFullYear()}
        </p>
      </footer>
    );
  }
}

export default Footer;
