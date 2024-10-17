import { Component } from '@angular/core';

import { HeaderComponent } from '@app/modules/portfolio/components/header/header.component';
import { ExperiencesComponent } from '@app/modules/portfolio/components/experiences/experiences.component';
import { KnowledgeComponent } from '@app/modules/portfolio/components/knowledge/knowledge.component';
import { ProjectsComponent } from '@app/modules/portfolio/components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
