import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVyc2Vya2VyMDQiLCJhIjoiY2xzcDBwbWhzMGwxOTJrcGIwZ2M1cDhodCJ9.I5jT5P0aGpARN6UvDaALXQ';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
