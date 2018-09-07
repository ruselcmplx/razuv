import React, { Component } from 'react';
import Tile from './Tile.js'
import './Works.css'

class Works extends Component {
   renderTiles() {
      let tiles = []
      for(let i=0;i<=5;i++) {
         tiles.push(<Tile key={i}/>)
      }
      return tiles;
   }
   render() {
      
      return(
         <div className="Works">
            <div className="Head">2018</div>
            <div>
               {this.renderTiles()}
            </div>
            <div className="Head">2017</div>
            <div>
               {this.renderTiles()}
            </div>
         </div>
      )
   }
}

export default Works;