import React, { Component } from 'react';
import ContactForm from './ContactForm.js'
import './Contacts.css'

let strings = {
   "ru": {
      "header": "Написать можно здесь",
      "headerSocials": "Или здесь",
      "messagePH": "Сообщение",
      "emailPH": "Ваш имейл",
      "send": "Отправить",
      "personalData": "Нажимая «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.",
      "socials": [
         {"id": "vk", "name": "ВКонтакте"},
         {"id": "fb", "name": "Фейсбук"},
         {"id": "tg", "name": "Телеграм"},
         {"id": "bh", "name": "Беханс"}
      ]
   },
   "en": {
      "header": "You may message me here",
      "headerSocials": "...or here",
      "messagePH": "Your message",
      "emailPH": "Your email",
      "send": "Send",
      "personalData": "By pressing ’’Send’’ you agree with Privacy Policy and Data Use Policy",
      "socials": [
         {"id": "vk", "name": "VK"},
         {"id": "fb", "name": "Facebook"},
         {"id": "tg", "name": "Telegram"},
         {"id": "bh", "name": "Behance"}
      ]
   }
}


class Contacts extends Component {
   constructor(props) {
      super(props);
      this.state = {
         strings: strings
      };
   }

   render() {
      const state = this.state;
      const strings = this.props.lang ? state.strings.ru : state.strings.en

      return(
         <div className="Contacts">
            <div className="MessageForm Content">
               <div className="MessageForm_Header">{strings.header}</div>
               <ContactForm strings={strings}/>
               <div className="PersonalData">{strings.personalData}</div>
            </div>
            <div className="Socials Content">
               <div className="MessageForm_Header">{strings.headerSocials}</div>
               <div className="SocialsLinks">
                  {strings.socials.map(social => {
                     return <div key={social.id}><a href="#">{social.name}</a></div>
                  })}
               </div>
            </div>
         </div>
      )
   }
}

export default Contacts;