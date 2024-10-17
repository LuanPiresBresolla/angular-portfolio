import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { IProject } from '@app/modules/portfolio/interface/IProject';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  public getData = signal<IProject | null>(null);

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: IProject,
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
  ) {}

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal() {
    this._dialogRef.close();
  }
}
