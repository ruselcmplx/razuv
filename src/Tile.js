import React, { Component } from 'react';
import './css/Tile.css'

class Tile extends Component {

   onTileClick() {
      this.props.onTileClick(this.props.data.id);
   }

   render() {
      const tile_data = this.props.data;
      const name = tile_data.name;
      const tags = tile_data.tags.map(tag => '#'+tag);
      const active = tile_data.active;
      const is_nda = tile_data.active == null;
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
         <div className="Tile" onClick={this.onTileClick.bind(this)}>
            <div className={className}>{name} {nda}</div>
            <div className="Tile_tags">{tags.join(', ')}</div>
         </div>
      )
   }
}

export default Tile;