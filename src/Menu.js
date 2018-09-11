import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
   onClick(id) {
      console.log(this.id);
      this.props.onClick(id);
   }

   render() {
      const activeClass = 'active';
      const activeId = this.props.active;
      const menuItems = this.props.menuItems;
      
      return(
         <div className='Menu'>
            <div className='Menu_name'>Алексей Разуваев</div>
            <ul>
               {menuItems.map((item) => {
                  const id = item.id;
                  const name = item.value;
                  return <li key={id} onClick={() => { this.props.onClick(id) }} className={activeId === id ? activeClass : ''}>{name}</li>
               })}
            </ul>
         </div>
      )
   }
}

export default Menu;
