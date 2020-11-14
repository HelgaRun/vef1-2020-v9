import { el, element, formatDate } from './lib/utils.js';
import { getEarthquakes } from './lib/earthquakes.js';
import { init, createPopup } from './lib/map.js';
import { map } from 'leaflet';
// importa öðru sem þarf...

function markerPoint(data) {
  data.then((features) => { 
    features.forEach((quackAttack) => {
      const flag = createPopup(quackAttack, quackAttack.properties.title);
      const container = el('li',
        el('div',
          el('h2', quackAttack.properties.title.toString()),
          el('dl',
            el('dt','Tími'),
            el('dd',formatDate(quackAttack.properties.time)),
            el('dt','Styrkur'),
            el('dd',quackAttack.properties.mag.toString()),
          ), 
          element('div',{ class: 'buttons' }, null,
          element('button',null,{ click: () => flag.openPopup()},'Sjá á korti',),
          element('a',{ href: quackAttack.properties.url.toString(), target: '_blank' }, null,'Skoða nánar',),
          ),
        ),
      );
      document.querySelector('.earthquakes').appendChild(container);
    });
  }); 
}  

const map_container = document.querySelector('.map'); 


document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  const earth = getEarthquakes();
  markerPoint(earth);
  console.log(earth);
  init(map_container);
});
