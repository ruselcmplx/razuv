import React, { Component } from 'react';
import './Tile.css'

class Tile extends Component {
   render() {
      const name = this.props.name;
      const tags = this.props.tags.map(tag => '#'+tag);
      const active = this.props.active;
      const is_nda = this.props.active == null;
      let nda = null;

      let className = 'Tile_name';
      if(!active) {
         className += ' Tile_name-noact';
      }
      if (is_nda) {
         className += ' Tile_name-nda'
         nda = <div className='Tile_name-nda'>NDA</div>
      }

      return(
         <div className="Tile">
            <div className={className}>{name} {nda}</div>
            <div className="Tile_tags">{tags.join(', ')}</div>
         </div>
      )
   }
}

export default Tile;