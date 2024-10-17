import { Component, signal } from '@angular/core';

import { IKnowledge } from '@app/modules/portfolio/interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledges = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de JavaScript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de NodeJS',
    },
  ]);
}
