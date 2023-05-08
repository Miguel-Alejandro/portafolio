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
      name: "Angular",
      color: "red",
      experience: 80
    },
    {
      name: "Javascript",
      color: "amber",
      experience: 80
    },
    {
      name: "Git",
      color: "slate",
      experience: 70
    },
    {
      name: "Jira",
      color: "cyan",
      experience: 76
    },
    {
      name: "Github",
      color: "slate",
      experience: 70
    },
    {
      name: "Go",
      color: "cyan",
      experience: 30
    },
    {
      name: "Cypress",
      color: "green",
      experience: 50
    },
    {
      name: "Ionic",
      color: "cyan",
      experience: 50
    },
    {
      name: "Stencil.js",
      color: "slate",
      experience: 50
    },
    {
      name: "Python",
      color: "slate",
      experience: 60
    },
    {
      name: "Django",
      color: "slate",
      experience: 60
    },
    {
      name: "Django Rest",
      color: "slate",
      experience: 47
    },
  ]

  constructor( public icons:IconClass ){}

  public getSkillInfo($event): void {
    this.skillInfo = $event;
  }

}
