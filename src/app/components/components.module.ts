import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { IconClass } from '../classes/icons/icons';

import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { FoldersComponent } from './folders/folders.component';
import { SkillsComponent } from './skills/skills.component';
import { BuildingPageComponent } from './building-page/building-page.component';
import { TerminalCardComponent } from './terminal-card/terminal-card.component';
import { SocialButtonComponent } from './social-button/social-button.component';

@NgModule({
    declarations: [
        SidenavComponent,
        AboutMeComponent,
        ExperienceComponent,
        FoldersComponent,
        SkillsComponent,
        BuildingPageComponent,
        TerminalCardComponent,
        TerminalCardComponent,
        SocialButtonComponent,
    ],
    imports: [ 
        CommonModule,
        OverlayModule,
        FontAwesomeModule,
        CarouselModule
    ],
    exports: [
        CarouselModule,
        
        SidenavComponent,
        AboutMeComponent,
        ExperienceComponent,
        FoldersComponent,
        SkillsComponent,
        BuildingPageComponent,
        TerminalCardComponent,
        SocialButtonComponent,
    ],
    providers: [IconClass]
})
export class ComponentsModule {}