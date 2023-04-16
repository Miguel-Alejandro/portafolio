import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconClass } from '../classes/icons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
    declarations: [
        SidenavComponent,
        AboutMeComponent
    ],
    imports: [ 
        CommonModule,
        OverlayModule,
        FontAwesomeModule
    ],
    exports: [
        SidenavComponent,
        AboutMeComponent,
    ],
    providers: [IconClass]
})
export class ComponentsModule {}