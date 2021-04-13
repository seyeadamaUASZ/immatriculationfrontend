import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-generernumimmat',
  templateUrl: './view-generernumimmat.component.html',
  styleUrls: ['./view-generernumimmat.component.css']
})
export class ViewGenerernumimmatComponent implements OnInit {
  result:any;
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ViewGenerernumimmatComponent>,@Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
this.detail();
  }
detail() {
this.result = this.donnee;  }
  closeDialog() {
    this.dialogRef.close();
  }
}
