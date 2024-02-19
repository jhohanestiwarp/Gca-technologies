import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, SidemenuComponent],
  templateUrl: './layout.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  menuItems = routes
  .flat()
  .filter((route) => route && route.path)
  .filter(
    (route) => !(route.path?.includes(':') || route.path?.includes('**'))
  );

  constructor() {
    console.log(this.menuItems);
  }
}
