import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit,
  inject,
  HostListener,
} from '@angular/core';
import { MapService } from '@services/map.service';
import { SalesmanService } from '@services/salesman.service';
import { ModalSalemanInfoComponent } from '@shared/modals/modal-saleman-info/modal-saleman-info.component';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule, ModalSalemanInfoComponent],
  templateUrl: './map-view.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MapViewComponent implements AfterViewInit {
  public mapService = inject(MapService);
  public salesManService = inject(SalesmanService);

  ngAfterViewInit(): void {
    this.mapService.initMapView();
  }

  @HostListener('click')
  clicked() {
    this.salesManService.saleManSelected.set(undefined);
    setTimeout(() => {
      this.mapService.selectSalemanFromMap();
    }, 100);
  }
}
