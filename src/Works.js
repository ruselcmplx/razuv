import React, { Component } from 'react';
import Tile from './Tile.js';
import './css/Works.css'

class Works extends Component {
   renderTiles(works) {
      let tiles = [];
      works.map(tile => tiles.push(<Tile key={tile.id} data={tile} onTileClick={this.handleTileClick.bind(this)}/>));
      return tiles;
   }

   handleTileClick(id) {
      this.props.handleTileClick(id);
   }

   render() {
      const years = this.props.years;
      const works = this.props.works;
      
      return(
         <div className="Works">
            {years.map(year => {
               return(
                  <div key={year}>
                     <div className="Head">{year}</div>
                     <div>{this.renderTiles(works.filter(work => work.year === year))}</div>
                  </div>
               )
            })}
         </div>
      )
   }
}

export default Works;