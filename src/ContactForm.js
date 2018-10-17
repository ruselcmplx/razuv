import React, { Component } from 'react';
import './ContactForm.css'

class ContactForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         strings: this.props.strings,
         message: '',
         email: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   validateInput(event) {}

   handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
         [name]: value
      });
   }

   handleSubmit(event) {
      console.log('Submitted ' + this.state.message + this.state.email);
      event.preventDefault();
   }

   render() {
      const strings = this.props.strings;

      return(
         <div className="ContactsForm">
            <form onSubmit={this.handleSubmit} id="Form">
               <textarea
                  required
                  name="message"
                  className="Message Input"
                  form="Form"
                  size="420px"
                  value={this.state.message}
                  placeholder={strings.messagePH}
                  onChange={this.handleChange}
               />
               <input 
                  required
                  name="email"
                  className="Email Input"
                  type="email"
                  value={this.state.email}
                  placeholder={strings.emailPH}
                  onChange={this.handleChange}
               />
               <input
                  className="SendButton"
                  type="submit" 
                  value={strings.send} 
               />
            </form>
         </div>
      )
   }
}

export default ContactForm;