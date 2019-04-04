import React, { Component } from 'react';
import Tile from './Tile.js'
import Work from './Work.js';
import './css/Works.css'

class Works extends Component {
   constructor(props) {
      super(props);
      this.state = {
         works: this.props.works,
         years: this.props.years
      }
   }

   renderTiles(works) {
      let tiles = [];
      works.map(tile => tiles.push(<Tile key={tile.id} data={tile} onTileClick={this.props.onTileClick}/>));
      return tiles;
   }

   render() {
      const years = this.state.years;
      const works = this.state.works;
      
      if (this.props.currentWork) {
         return(<Work work={this.props.currentWork}/>);
      } else {
         return(
            <div className="Works">
               {years.map(year => {
                  return <div key={year}>
                           <div className="Head">{year}</div>
                           <div>{this.renderTiles(works.filter(work => work.year === year))}</div>
                        </div>
               })}
            </div>
         )
      }
   }
}

export default Works;