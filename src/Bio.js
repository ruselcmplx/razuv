import React, { Component } from 'react';
import './Bio.css'

let links = {
   "music": "https://vk.com/bruits",
   "experiment":  "http://blankposter.com/?cftype=author&cfval=Alexey%20Razuvaev",
   "noise": "http://razuvaev.tumblr.com",
   "relap": "https://relap.io",
   "gridly": "https://gridly.ru",
   "strelka": "http://strelka.com"
}


class Bio extends Component
   onContactClick = () => {
      this.props.onContactClick();
   }

   render() {
      let data = {
         "ru": {
            "profile": "Профиль",
            "profileText": "Самоучусь на ошибках с 2012 года. Занимаюсь айдентикой, графдизайном, дизайном интерфейсов, упаковки, анимацией интерфейсов, разрабатываю пользовательское взаимодействие.",
            "profileActivities": 
               <div className="ProfileActivities">
                  <p><a href={links.music}>Пишу</a> про музыку.</p>
                  <p>Люблю реализовывать хорошие идеи.</p>
                  <p>Иногда делаю это бесплатно.</p>
                  <p><a onClick={this.onContactClick}>Напишите</a>, вдруг вашей идее тоже повезёт.</p>
                  <p><a href={links.experiment}>Экспериментирую</a> с постерами.</p>
                  <p><a href={links.noise}>Шумлю</a> в тамблере.</p>
               </div>
            ,
            "inventory": "Инвентарь",
            "inventoryText": "Illustrator, Photoshop, Premiere, After Effects, Sketch, Principle, Figma, Cinema 4D, Pixelmator Pro, Affinity Designer",
            "teams": "Команды",
            "teamsLinks":
               <div>
                  <p><a href={links.relap}>Relap.io</a></p>
                  <p>Блэкайдиа</p>
                  <p><a href={links.gridly}>Гридли</a></p>
                  <p><a href={links.strelka}>Институт «Стрелка»</a></p>
                  <p>Воск Криейтив Медиа</p>
               </div>
         },
         "en": {
            "profile": "Profile",
            "profileText": "Since 2012 I am learning on my own at creating brand identities, graphic design, UI and UX design and animating interfaces.",
            "profileActivities": 
               <p key="profile_activities">
                  Also I love <a href={links.music}>making playlists</a>, 
                  making good ideas come true (sometimes for free),&nbsp;
                  <a href={links.experiment}>experimenting</a> on Blank Poster 
                  and <a href={links.noise}>making noise</a> on Tumblr. Feel free to <a onClick={this.onContactClick}>contact</a> me!
               </p>
            ,
            "inventory": "Inventory",
            "inventoryText": "Illustrator, Photoshop, Premiere, After Effects, Sketch, Principle, Figma, Cinema 4D, Pixelmator Pro, Affinity Designer",
            "teams": "Teams",
            "teamsLinks": 
               <div className="TeamLinks">
                  <p><a href={links.relap}>Relap.io</a></p>
                  <p>Blackidea</p>
                  <p><a href={links.gridly}>Gridly</a></p>
                  <p><a href={links.strelka}>Strelka Institute</a></p>
                  <p>WOSQ Creative Media</p>
               </div>
         }
      }
      const strings = this.props.lang ? data.ru : data.en;

      return(
         <div className="Bio">
            <div className="Profile Content">
               <div className="Header">{strings.profile}</div>
               <div className="Text">{strings.profileText}</div>
               <div className="Text">{strings.profileActivities}</div>
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