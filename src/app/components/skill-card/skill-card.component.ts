import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skill: Skill

  get colors() {
    return {
      'bg-red-600': this.skill.color === 'red',
      'hover:bg-red-600': this.skill.color === 'red',
      'focus:bg-red-600': this.skill.color === 'red',
      
      'bg-amber-300': this.skill.color === 'amber',
      'hover:bg-amber-300': this.skill.color === 'amber',
      'focus:bg-amber-300': this.skill.color === 'amber',
      
      'bg-slate-600': this.skill.color === 'slate',
      'hover:bg-slate-600': this.skill.color === 'slate',
      'focus:bg-slate-600': this.skill.color === 'slate',
      
      'bg-cyan-500': this.skill.color === 'cyan',
      'hover:bg-cyan-500': this.skill.color === 'cyan',
      'focus:bg-cyan-500': this.skill.color === 'cyan',
      
      'bg-green-600': this.skill.color === 'green',
      'hover:bg-green-600': this.skill.color === 'green',
      'focus:bg-green-600': this.skill.color === 'green',
    }
  }

}
