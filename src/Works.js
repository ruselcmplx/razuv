import React, { Component } from 'react';
import Tile from './Tile.js'
import './Works.css'
import data from './data/works_ru.json'

class Works extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tiles: [],
         years: []
      }
   }

   componentWillMount () {
      this.setState({
         works: data.works,
         years: data.years
      })
  }

   renderTiles(works) {
      let tiles = [];
      works.map(tile => tiles.push(<Tile key={tile.id} name={tile.name} tags={tile.tags} active={tile.active}/>));
      return tiles;
   }

   render() {
      const years = this.state.years;
      const works = this.state.works;
      
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