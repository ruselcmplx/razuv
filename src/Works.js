import React, { Component } from 'react';
import Tile from './Tile.js'
import './Works.css'

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
      works.map(tile => tiles.push(<Tile key={tile.id} name={tile.name} tags={tile.tags} active={tile.active}/>));
      return tiles;
   }

   render() {
      const years = this.props.years;
      const works = this.props.works;
      
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

export default Works;