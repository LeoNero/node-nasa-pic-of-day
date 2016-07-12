# NASA Astronomy Picture of the Day

##
![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![GitHub Stars](https://img.shields.io/github/stars/LeoNero/node-nasa-pic-of-day.svg?style=flat-square)](https://github.com/LeoNero/node-nasa-pic-of-day/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/LeoNero/node-nasa-pic-of-day.svg?style=flat-square)](https://github.com/LeoNero/node-nasa-pic-of-day/issues) [![Current Version](https://img.shields.io/badge/version-0.1-green.svg?style=flat-square)](https://github.com/LeoNero/node-nasa-pic-of-day)

A module to get NASA's APOD information
---

## Installation
``` js

npm install node-nasa-pic-of-day --save

```
---

## API

### getAllData(callback);
Returns a JSON that contains all the data.

---

## Usage
``` js

'use strict'
const APOD = require('node-nasa-pic-of-day');

const apod = new APOD({
  key: 'your NASA API key goes here',
  date: '2016-02-25' //default: today. use YYYY-MM-DD format.
});

apod.getAllData(function(body) {
  console.log(body);
});

```
---

## Response Format
A successful response will be similar to the following:
```
{ 
  copyright: 'Jeff Dai',
  date: '2016-02-25',
  explanation: 'Fans of planet Earth probably recognize its highest mountain, the Himalayan Mount Everest, on the left in this 3-panel skyscape of The World at Night. Shrouded in cloud Everest\'s peak is at 8,848 meters (29,029 feet) elevation above sea level. In the middle panel, stars trail above volcanic Mauna Kea forming part of the island of Hawaii. Festooned with astronomical observatories, its summit lies a mere 4,168 meters above sea level. Still, measured from its base starting below the ocean\'s surface, Mauna Kea is over 10,000 meters tall, making it Earth\'s tallest mountain from base to summit. At right, beneath the arc of the Milky Way is the Andean mountain Chimborazo in Ecuador. The highest equatorial mountain, the Chimborazo volcano\'s peak elevation is 6,268 meters above sea level. But rotating planet Earth is a flattened sphere (oblate spheroid) in shape, its equatorial diameter greater than its diameter measured pole to pole. Sitting nearly on top of Earth\'s greatest equatorial bulge, Chimborazo\'s peak is the farthest point on the planet\'s surface from the center, over 2,000 meters farther from the center of the Earth than Everest\'s peak. That makes Chimborazo\'s summit the place on Earth\'s surface closest to the stars.',
  hdurl: 'http://apod.nasa.gov/apod/image/1602/Everest-MaunaKea-Chimborazo-1800x600-cp8.jpg',
  media_type: 'image',
  service_version: 'v1',
  title: 'Highest, Tallest, and Closest to the Stars',
  url: 'http://apod.nasa.gov/apod/image/1602/Everest-MaunaKea-Chimborazo-1800x600-cp8.jpg' 
}

```



