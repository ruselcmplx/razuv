import React, { Component } from 'react';
import './css/Work.css'

class Work extends Component {
   constructor(props) {
      super(props);
      this.state = {
         work: this.props.work         
      }
   }

   render() {
      return(
         <div className="Work">
            <div className="Work_header">
               <div className="Work_name">{this.props.work.name}</div>
               <div className="Work_site">{this.props.work.name}</div>
               <div className="Work_closeButton">{this.props.work.name}</div>
            </div>
            <div className="Work_content">
                  <img className="Work_image" width="300px" height="400px" src="mstile-150x150.png"/>
            </div>
         </div>
      )
   }
}

export default Work;