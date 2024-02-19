import { Injectable, ElementRef, ViewChild, inject } from '@angular/core';
import { LngLatBounds, Map, Marker, Popup } from 'mapbox-gl';
import { SalesmanService } from './salesman.service';
import { ISalesmanDto } from '@interfaces/salesman';
import { validatePhoto, validateVehicle } from '@helpers/validateFiles';

interface IMarker {
  saleman: ISalesmanDto;
  marker: Marker;
}

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private salesManService = inject(SalesmanService);

  private map?: Map;
  private markers: IMarker[] = [];
  markerSelected: Marker | undefined = undefined;

  initMapView(): void {
    this.map = new Map({
      container: 'mapDiv',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 15,
    });
    const bounds = new LngLatBounds();

    this.salesManService.salesmanList().forEach((salesman, i) => {
      if (i === 0) {
        this.map?.setCenter([
          salesman.coordinates.longitude,
          salesman.coordinates.latitude,
        ]);
      }

      const htmlElement = this.createIconMarker(salesman.vehicle);
      this.createMarker(salesman, htmlElement);

      bounds.extend([
        salesman.coordinates.longitude,
        salesman.coordinates.latitude,
      ]);
    });

    this.map.fitBounds(bounds, {
      padding: 100,
    });
    setTimeout(() => {
      console.log(document.getElementsByTagName('tttXD'));
      console.log(document.getElementById('testXd'));
    }, 2000);
  }

  createMarker(
    salesman: ISalesmanDto,
    htmlElement: HTMLImageElement | HTMLElement
  ) {
    if (!this.map) throw Error('Mapa no inicializado');

    const poppup = this.createPopup(salesman);

    const newMarker = new Marker({ element: htmlElement })
      .setLngLat([
        salesman.coordinates.longitude,
        salesman.coordinates.latitude,
      ])
      .setPopup(poppup)
      .addTo(this.map);

    this.markers.push({
      saleman: salesman,
      marker: newMarker,
    });
  }

  public createIconMarker(vehicle: string) {
    const htmlElement = document.createElement('img');
    htmlElement.src = `/assets/icons/${validateVehicle(vehicle)}`;
    return htmlElement;
  }

  private createIconMarkerSelected(vehicle: string) {
    const htmlElement = document.createElement('div');
    htmlElement.innerHTML = `<div class="relative z-50">
        <img
          class="w-10 h-16 rounded-lg"
          src="/assets/icons/pinselected.svg"
          alt=""
        />
        <img
          class="w-16 h-16 rounded-lg absolute -top-3"
          src="/assets/icons/${validateVehicle(vehicle)}"
          alt=""
        />
      </div>`;
    return htmlElement;
  }

  public showPopup(id: string | undefined) {
    this.markers.forEach(({ saleman, marker }, i) => {
      if (saleman.id === id) {
        if (!marker.getPopup().isOpen()) {
          marker = this.changeMarkerIcon(marker, saleman, i, true);
          marker.togglePopup();
        } else {
          marker.togglePopup();
          marker = this.changeMarkerIcon(marker, saleman, i, false);
        }
      }
    });
  }

  public selectSalemanFromMap() {
    this.markers.forEach(({ saleman, marker }, i) => {
      if (marker.getPopup().isOpen()) {
        this.salesManService.saleManSelected.set(saleman);
        marker = this.changeMarkerIcon(marker, saleman, i, true);
        marker.togglePopup();
        this.markers[i].marker = marker;
      } else {
        marker = marker.togglePopup();
        this.changeMarkerIcon(marker, saleman, i, false);
      }
    });
  }

  private changeMarkerIcon(
    marker: Marker,
    saleman: ISalesmanDto,
    index: number,
    open: boolean
  ): Marker {
    if (!this.map) throw Error('Mapa no inicializado');
    marker.remove();
    const poppup = this.createPopup(saleman);
    marker = new Marker({
      element: open
        ? this.createIconMarkerSelected(saleman.vehicle)
        : this.createIconMarker(saleman.vehicle),
    })
      .setLngLat([saleman.coordinates.longitude, saleman.coordinates.latitude])
      .setPopup(poppup)
      .addTo(this.map);
    this.markers[index].marker = marker;
    return marker;
  }

  private createPopup(salesman: ISalesmanDto) {
    const popup = new Popup({
      offset: [0, -35],
    }).setHTML(`
      <div class="flex gap-4">
        <div class="relative">
          <img class="w-16 h-24 min-w-16 rounded-full" src="/assets/images/${validatePhoto(
            salesman.photo
          )}" alt="">
          <span class="bottom-0 left-12 absolute  w-7 h-7 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
        <div>
          <h6 class="text-base">${salesman.name}</h6>
          <span class="text-sky-500 text-xs">${salesman.category}</span>
        </div>
        <div class="flex justify-end items-end">
          <button
            id="showInfo"
            type="button"
            class="shadow-gray-500 shadow-md text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-xs px-4 py-1 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
            >
            <span class="uppercase">Ver</span>
          </button>
        </div>
      </div>
    `);
    popup.on('open', () => {
      const btnOpenInfo = popup.getElement()?.querySelector('#showInfo');
      if (btnOpenInfo) {
        btnOpenInfo.addEventListener('click', () => {
          document.getElementById('btnOpenInfo')?.click();
        });
      }
    });
    return popup;
  }
}
