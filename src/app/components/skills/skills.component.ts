import { Component } from '@angular/core';
import { IconClass } from 'src/app/classes/icons/icons';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skillInfo: Skill
  public skills: Array<Skill> = [
    {
      logo: this.icons.angularIcon,
      name: "Angular",
      color: "red",
      experience: 4
    },
    {
      logo: this.icons.javascriptIcon,
      name: "Javascript",
      color: "amber",
      experience: 4
    },
    {
      logo: this.icons.gitIcon,
      name: "Git",
      color: "slate",
      experience: 3
    },
    {
      logo: this.icons.jiraIcon,
      name: "Jira",
      color: "cyan",
      experience: 3
    },
    {
      logo: this.icons.githubIcon,
      name: "Github",
      color: "slate",
      experience: 3
    },
    {
      logo: this.icons.goIcon,
      name: "Go",
      color: "cyan",
      experience: 2
    },
    {
      logo: "",
      name: "Cypress",
      color: "green",
      experience: 3
    },
    {
      logo: "/assets/svg/logo-ionic.svg",
      name: "Ionic",
      color: "cyan",
      experience: 4
    },
    {
      logo: "/assets/svg/logo-stencil.svg",
      name: "Stencil.js",
      color: "slate",
      experience: 3
    },
  ]

  constructor( public icons:IconClass ){}

  public getSkillInfo($event): void {
    this.skillInfo = $event;
  }

}
