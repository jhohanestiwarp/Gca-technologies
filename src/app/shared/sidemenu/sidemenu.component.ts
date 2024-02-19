import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  HostListener,
} from '@angular/core';
import { validateVehicle } from '@helpers/validateFiles';
import { ISalesmanDto } from '@interfaces/salesman';
import { MapService } from '@services/map.service';
import { SalesmanService } from '@services/salesman.service';
import { CardUserDetailComponent } from '@shared/cards/card-user-detail/card-user-detail.component';
import { ModalCreateSalemanComponent } from '@shared/modals/modal-create-saleman/modal-create-saleman.component';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, CardUserDetailComponent, ModalCreateSalemanComponent],
  templateUrl: './sidemenu.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  public mapService = inject(MapService);
  public salesManService = inject(SalesmanService);

  validateVehicle = validateVehicle;

  changeSelect(saleMan: ISalesmanDto) {
    if (saleMan.id === this.salesManService.saleManSelected()?.id) {
      this.salesManService.saleManSelected.set(undefined);
      this.mapService.showPopup(saleMan.id);
    } else {
      this.mapService.showPopup(this.salesManService.saleManSelected()?.id);
      this.salesManService.saleManSelected.set(saleMan);
      this.mapService.showPopup(saleMan.id);
    }
  }
}
