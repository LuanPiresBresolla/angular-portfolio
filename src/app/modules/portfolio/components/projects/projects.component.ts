import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectsComponent } from '@app/modules/portfolio/components/dialog/dialog-projects/dialog-projects.component';

import { DialogPanelClassEnum } from '@app/modules/portfolio/enum/DialogPanelClassEnum';

import { IProject } from '@app/modules/portfolio/interface/IProject';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public projects = signal<IProject[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: DialogPanelClassEnum.PROJECTS,
    });
  }
}
