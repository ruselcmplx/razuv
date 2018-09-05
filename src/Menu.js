import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
   onClick(id) {
      console.log(this.id);
      this.props.onClick(id);
   }

   render() {
      const activeClass = 'active';
      return(
         <div className='Menu'>
            <div className='name'>Алексей Разуваев</div>
            <ul>
               <li onClick={() => { this.props.onClick(0) }} className={ this.props.active === 0 ? activeClass : ''}>Работы</li>
               <li onClick={() => { this.props.onClick(1) }} className={ this.props.active === 1 ? activeClass : ''}>Биография</li>
               <li onClick={() => { this.props.onClick(2) }} className={ this.props.active === 2 ? activeClass : ''}>Контакты</li>
               <li onClick={() => { this.props.onClick(3) }} className={ this.props.active === 3 ? activeClass : ''}>English</li>
            </ul>
         </div>
      )
   }
}

export default Menu;
