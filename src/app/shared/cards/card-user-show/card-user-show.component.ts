import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-user-show',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './card-user-show.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUserShowComponent { }
