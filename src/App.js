import React, { Component } from 'react';
import Menu from './Menu.js';
import Works from './Works.js';
import './App.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 0,
         menuItems: [
            {id: 0, value: 'Работы'},
            {id: 1, value: 'Биография'},
            {id: 2, value: 'Контакты'},
            {id: 3, value: 'English'}
         ]
      }
   }

   handleMenuClick(id) {
      this.setState({
         active: id
      })
   }

   render() {
      const active = this.state.active;
      const menuItems = this.state.menuItems;
      let works;
      if (active === 0) {
         works = <Works />
      }
      return (
         <div className="App">
            <Menu active={active} menuItems={menuItems} onClick={this.handleMenuClick.bind(this)}/>
            {works}
         </div>
      );
   }
}

export default App;
