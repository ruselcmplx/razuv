import React, { Component } from 'react';
import Menu from './Menu.js';
import Works from './Works.js';
import Bio from './Bio.js';
import Contacts from './Contacts.js';
import './App.css';
import data from './data/data.json'


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 0,
         menuItems: data.menu.ru,
         lang: true,
         name: data.app.name.ru
      }
   }

   handleMenuClick(id) {
      if (id === 3) {
         this.setState({
            lang: !this.state.lang,
            menuItems: !this.state.lang ? data.menu.ru : data.menu.en,
            name: !this.state.lang ? data.app.name.ru : data.app.name.en
         })
         return;
      }
      this.setState({
         active: id
      })
   }

   render() {
      let active = this.state.active;
      let menuItems = this.state.menuItems;
      let lang = this.state.lang;
      let name = this.state.name;
      let years = data.works.years;
      let works = lang ? data.works.ru : data.works.en;
      let activeArea;
      switch (active) {
         case 0:
            activeArea = <Works works={works} years={years} />
            break;
         case 1:
            activeArea = <Bio lang={lang}/>
            break;
         case 2:
            activeArea = <Contacts lang={lang} />
            break;
         default:
            break;
      }
      return (
         <div className="App">
            <Menu name={name} active={active} menuItems={menuItems} onClick={this.handleMenuClick.bind(this)}/>
            <div className="ActiveArea">{activeArea}</div>
         </div>
      );
   }
}

export default App;
