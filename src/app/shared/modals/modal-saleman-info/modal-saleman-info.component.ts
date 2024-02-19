import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { validatePhoto, validateVehicle } from '@helpers/validateFiles';
import { SalesmanService } from '@services/salesman.service';

@Component({
  selector: 'app-modal-saleman-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-saleman-info.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalSalemanInfoComponent {
  public salesManService = inject(SalesmanService);
  validateVehicle = validateVehicle;
  validatePhoto = validatePhoto;
}
