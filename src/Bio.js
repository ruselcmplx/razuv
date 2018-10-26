import React, { Component } from 'react';
import './Bio.css'

let links = {
   "music": "1",
   "contact": "2",
   "experiment":  "3",
   "noise": "4",
   "relap": "5",
   "blackidea": "6",
   "gridly": "7",
   "strelka": "8"
}

let strings = {
   
   "ru": {
      "profile": "Профиль",
      "profileText": "Самоучусь на ошибках с 2012 года. Занимаюсь айдентикой, графдизайном, дизайном интерфейсов, упаковки, анимацией интерфейсов, разрабатываю пользовательское взаимодействие",
      "profileActivities": 
         <div className="ProfileActivities">
            <p><a href={links.music}>Пишу</a> про музыку.</p>
            <p>Люблю реализовывать хорошие идеи.</p>
            <p>Иногда делаю это бесплатно.</p>
            <p><a href={links.contact}>Напишите</a>, вдруг вашей идее тоже повезёт.</p>
            <p><a href={links.experiment}>Экспериментирую</a> с постерами.</p>
            <p><a href={links.noise}>Шумлю</a> в тамблере.</p>
         </div>
      ,
      "inventory": "Инвентарь",
      "inventoryText": "Adobe Illustrator, Photoshop, Premiere, After Effects, Sketch, Principle, Figma, Cinema 4D, Pixelmator Pro",
      "teams": "Команды",
      "teamsLinks":
         <div>
            <p><a href={links.relap}>Relap.io</a></p>
            <p><a href={links.blackidea}>Блэкайдиа</a></p>
            <p><a href={links.gridly}>Гридли</a></p>
            <p><a href={links.strelka}>Институт «Стрелка»</a></p>
            <p>Воск Криейтив Медиа</p>
         </div>
   },
   "en": {
      "profile": "Profile",
      "profileText": "Since 2012 I am learning on my own at creating brand identities, graphic design, UI and UX design and animating interfaces.",
      "profileActivities": [
         <p>
            Also I love to <a href={links.music}>make playlists</a>, 
            make good ideas come true (sometimes for free), 
            <a href={links.experiment}>experimenting</a> on Blank Poster 
            and <a href={links.noise}>making noise</a> on Tumblr.
         </p>
      ],
      "inventory": "Inventory",
      "inventoryText": "Adobe Illustrator, Photoshop, Premiere, After Effects, Sketch, Principle, Figma, Cinema 4D, Pixelmator Pro",
      "teams": "Teams",
      "teamsLinks": [
         <div className="TeamLinks">
            <p><a href={links.relap}>Relap.io</a></p>
            <p><a href={links.blackidea}>Blackidea</a></p>
            <p><a href={links.gridly}>Gridly</a></p>
            <p><a href={links.strelka}>Strelka Institute</a></p>
            <p>WOSQ Creative Media</p>
         </div>
      ]
   }
}


class Bio extends Component {
   constructor(props) {
      super(props);
      this.state = {
         strings: strings
      };
   }

   render() {
      const state = this.state;
      const strings = this.props.lang ? state.strings.ru : state.strings.en;

      return(
         <div className="Bio">
            <div className="Profile Content">
               <div className="Header">{strings.profile}</div>
               <div className="Text">{strings.profileText}</div>
               <div className="Profile_Activities">{strings.profileActivities}</div>
            </div>
            <div className="Content">
               <div className="Inventory">
                  <div className="Header">{strings.inventory}</div>
                  <div className="Text">{strings.inventoryText}</div>
               </div>
               <div className="Teams">
                  <div className="Header">{strings.teams}</div>
                  <div className="Teams_Links">{strings.teamsLinks}</div>
               </div>
            </div>
         </div>
      )
   }
}

export default Bio;