import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapViewComponent } from '@shared/maps/map-view/map-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MapViewComponent
  ],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent { }
