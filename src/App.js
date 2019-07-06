import React, { Component } from 'react';
import Menu from './Menu.js';
import Works from './Works.js';
import Bio from './Bio.js';
import Contacts from './Contacts.js';
import Work from './Work.js';
import './css/App.css';
import data from './data/data.json';


class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: 0,
         menuItems: data.menu.ru,
         lang: true,
         name: data.app.name.ru,
         currentWorkId: null
      }
   }

   handleContactClick() {
      this.setState({
         active: 2
      });
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

   handleTileClick(id) {
      this.setState({
         active: 'work',
         currentWorkId: id
      });
   }

   handleWorkClose() {
      this.setState({
         active: 0
      });
   }

   render() {
      const works = this.state.lang ? data.works.ru : data.works.en;
      const currentWork = works[this.state.currentWorkId];
      let activeArea;
      switch (this.state.active) {
         case 0:
            activeArea = <Works works={works} years={data.works.years} handleTileClick={this.handleTileClick.bind(this)}/>;
            break;
         case 1:
            activeArea = <Bio lang={this.state.lang} onContactClick={this.handleContactClick.bind(this)}/>;
            break;
         case 2:
            activeArea = <Contacts lang={this.state.lang} />;
            break;
         case 'work':
            activeArea = <Work work={currentWork} onWorkClose={this.handleWorkClose.bind(this)} lang={this.state.lang}/>;
            break;
         default:
            break;
      }
      return (
         <div className="App">
            <Menu name={this.state.name} active={this.state.active} menuItems={this.state.menuItems} onClick={this.handleMenuClick.bind(this)}/>
            <div className="ActiveArea">{activeArea}</div>
         </div>
      );
   }
}

export default App;
