import { PlaqueImmatriculationService } from '../../service/plaqueimmatriculation.service';
import { PlaqueImmatriculation } from '../../model/plaqueimmatriculation';
import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar,MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-view-plaqueimmatriculation',
  templateUrl: './view-plaqueimmatriculation.component.html',
  styleUrls: ['./view-plaqueimmatriculation.component.scss']
})
export class ViewPlaqueImmatriculationComponent implements OnInit {
result:any;
  constructor(private plaqueimmatriculationService: PlaqueImmatriculationService,
    private router: Router, private formbuild: FormBuilder, 
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ViewPlaqueImmatriculationComponent>,@Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
this.detail();
  }
detail() {   
this.result = this.donnee;  }
  closeDialog() {
    this.dialogRef.close();
  }
}