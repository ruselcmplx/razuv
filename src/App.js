import React, { Component } from 'react';
import Menu from './Menu.js';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 0
      }
   }

   handleMenuClick(id) {
      this.setState({
         active: id
      })
   }

   render() {
      const active = this.state.active;
      return (
         <div className="App">
            <Menu active={active} onClick={this.handleMenuClick.bind(this)}/>
         </div>
      );
   }
}

export default App;
