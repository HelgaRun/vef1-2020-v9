/**
 * Sækja gögn frá
 * https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
 * 
 * sér í lagi, alla jarðskjálfta 4,5+ seinustu 7 daga:
 * https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
 * 
 * Ath, í verkefni er afrit af gögnum í `./4.5_week.geojson`, gott
 * að nota það á meðan þróun stendur en skipta svo út.
 */

//const URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

const URL = './4.5_week.geojson';

/*export async function fetchEarthquakes() {
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    let testArry = data.features;
    for (let i = 0; i < testArry.length; i++) {
      console.log("____________________________")
      let mag = data.features[i].properties.mag
      let lat = data.features[i].geometry.coordinates[0]
      let long = data.features[i].geometry.coordinates[1]
      let idk = data.features[i].geometry.coordinates[2]
      console.log("____________________________")

      testman += {"mag" : Object.values(mag), "lat": Object.values(lat), "long": Object.values(long), "idk": Object.values(idk)}

      console.log(testman)
    }
  });
}*/

export async function getEarthquakes() {
  return fetch(URL)
    .then((result) => {
      if (!result.ok) {
        throw new Error('Non 200 status');
      }
      return result.json();
    })
    .then((data) => data.features)
    .catch((error) => console.error(error));
}