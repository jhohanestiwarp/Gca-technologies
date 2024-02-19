import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { validatePhoto } from '@helpers/validateFiles';
import { ISalesmanDto } from '@interfaces/salesman';

@Component({
  selector: 'app-card-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-user-detail.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUserDetailComponent {
  @Input() saleMan!: ISalesmanDto;
  @Input() saleManSelected?: ISalesmanDto;

  validatePhoto = validatePhoto;
}
