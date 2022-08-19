import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

import { BodyComponent } from './layout/body/body.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HeaderComponent } from './layout/header/header.component';
import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [BodyComponent, SidenavComponent, HeaderComponent, SublevelMenuComponent],
  imports: [CommonModule, RouterModule, OverlayModule, CdkMenuModule],
  exports: [BodyComponent, SidenavComponent, HeaderComponent, SublevelMenuComponent],
})
export class CoreModule {}
