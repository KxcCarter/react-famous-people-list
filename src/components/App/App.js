import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FamousSection from '../FamousSection/FamousSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousSection />
        {/* 
          The list shouldn't go here.
          The list goes inside of the FamousSection Component
        */}
        <Footer />
      </div>
    );
  }
}

export default App;
