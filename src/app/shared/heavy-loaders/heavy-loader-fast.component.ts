import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>heavy-loader-slow works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoaderSlowComponent { }
