import React, { Component } from 'react';
import Tile from './Tile.js';
import './css/Works.css';

class Works extends Component {
   renderTiles(works) {
      let tiles = [];
      works.map(tile => {
         let clickFunc;
         if (tile.link) {
            clickFunc = this.handleLinkClick.bind(tile.link);
         } else if (tile.active) {
            clickFunc = this.handleTileClick.bind(this);
         }
         tiles.push(<Tile key={tile.id} data={tile} onTileClick={tile.active ? clickFunc: () => { return; }}/>);
         return true;
      });
      return tiles;
   }

   handleTileClick(id) {
      this.props.handleTileClick(id);
   }

   handleLinkClick() {
      if (this !== '#') {
         window.open(this);
      }
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