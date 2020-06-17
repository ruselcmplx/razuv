import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './css/Work.css';
import images from './data/images.json';

class Work extends Component {
   constructor(props) {
      super(props);
      this.state = {
         currentImageId: 0
      }
      this.images = images;
   }

   onClose() {
      this.props.onWorkClose();
   }

   onMouseMove(event) {
      const cursor = this.refs.cursor;
      const xpos = event.clientX-180;
      const ypos = event.clientY-30;
      if (xpos < 5 || xpos > this.refs.content.offsetWidth-20 || ypos < 45 || ypos > this.refs.content.offsetHeight+20) {
         cursor.style.display = "none";
      } else {
         cursor.style.display = "";
      }
      cursor.style.webkitTransform = "translate(" + xpos + "px, " + ypos + "px)";
   }

   handlerContentClick() {
      const id = this.props.work.id;
      const imagesCount = this.images[id].length - 1;
      const currentId = this.state.currentImageId;
      const nextImageId = currentId < imagesCount ? currentId + 1 : 0;
      setTimeout(() => {
         this.setState({
            currentImageId: nextImageId
         });
      }, 0);
   }

   render() {
      const work = this.props.work;
      const [ id, name, year ] = [ work.id, work.name, work.year];
      const closeButtonText = this.props.lang ? 'Закрыть' : 'Close';
      const currentImageId = this.state.currentImageId;
      const items = this.images[id].map((item, i) => (
         <CSSTransition
            key={i}
            classNames="carousel"
            timeout={{ enter: 1000, exit: 0 }}
         >
            { item.type === 'video' ?
               <video autoPlay loop className="Work_content__image" key={item.id} alt='' src={item.src} /> :
               <img className="Work_content__image" key={item.id} alt='' src={item.src} /> 
            }
         </CSSTransition>
      ))
      const images = items.filter(item => item.key === currentImageId.toString());
      if (this.images.hasOwnProperty(id)) {
         return(
            <div className="Work">
               <div className="Work_header">
                  <div className="Work_title Work_name">{name}</div>
                  <div className="Work_title Work_year">{year}</div>
                  <div className="Work_closeButton" onClick={this.onClose.bind(this)}>{closeButtonText}</div>
               </div>
               <div ref="content" className="Work_content"
                  onMouseMove={this.onMouseMove.bind(this)}
                  onClick={this.handlerContentClick.bind(this)}
               >
                  <TransitionGroup>
                     {images}
                  </TransitionGroup>
               </div>
               <div ref="cursor" className="Cursor" 
                  onClick={this.handlerContentClick.bind(this)}
               >
                  {currentImageId+1}/{this.images[id].length}
               </div>
            </div>
         )
      } else {
         return(
            <div>No data</div>
         )
      }
   }
}

export default Work;