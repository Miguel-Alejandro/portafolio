import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconClass } from '../classes/icons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        SidenavComponent
    ],
    imports: [ 
        CommonModule,
        OverlayModule,
        FontAwesomeModule
    ],
    exports: [
        SidenavComponent
    ],
    providers: [IconClass]
})
export class ComponentsModule {}