import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconClass } from '../classes/icons/icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { FoldersComponent } from './folders/folders.component';
import { FoldersDetailComponent } from './folders-detail/folders-detail.component';

@NgModule({
    declarations: [
        SidenavComponent,
        AboutMeComponent,
        ExperienceComponent,
        FoldersComponent,
        FoldersDetailComponent
    ],
    imports: [ 
        CommonModule,
        OverlayModule,
        FontAwesomeModule
    ],
    exports: [
        SidenavComponent,
        AboutMeComponent,
        ExperienceComponent,
        FoldersComponent,
        FoldersDetailComponent
    ],
    providers: [IconClass]
})
export class ComponentsModule {}