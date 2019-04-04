import React, { Component } from 'react';
import ContactForm from './ContactForm.js'
import './css/Contacts.css'

let strings = {
   "ru": {
      "header": "Написать можно здесь",
      "headerSocials": "Или здесь",
      "messagePH": "Сообщение",
      "emailPH": "Ваш имейл",
      "send": "Отправить",
      "personalData": "Нажимая «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.",
      "socials": [
         {"id": "vk", "name": "ВКонтакте", "link": "https://vk.com/razuvaev"},
         {"id": "fb", "name": "Фейсбук", "link": "https://fb.com/berazuvaev"},
         {"id": "tg", "name": "Телеграм", "link": "https://t.me/razuvaev"},
         {"id": "bh", "name": "Беханс", "link": "https://be.net/razuvaev"}
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
         {"id": "vk", "name": "VK", "link": "https://vk.com/razuvaev"},
         {"id": "fb", "name": "Facebook", "link": "https://fb.com/berazuvaev"},
         {"id": "tg", "name": "Telegram", "link": "https://t.me/razuvaev"},
         {"id": "bh", "name": "Behance", "link": "https://be.net/razuvaev"}
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
                     return <div key={social.id}><a href={social.link}>{social.name}</a></div>
                  })}
               </div>
            </div>
         </div>
      )
   }
}

export default Contacts;