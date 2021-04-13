import { Component, Inject, OnInit,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { DemandevehiculeService } from '../../service/demandevehicule.service';

@Component({
  selector: 'app-view-demandevehicule',
  templateUrl: './view-demandevehicule.component.html',
  styleUrls: ['./view-demandevehicule.component.css']
})
export class ViewDemandevehiculeComponent implements OnInit {
  @Input() profil: any;
  result: any;
  email:any
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ViewDemandevehiculeComponent>, @Inject(MAT_DIALOG_DATA) public donnee: any,private demandevehiculeService: DemandevehiculeService) { }

  ngOnInit() {
    this.detail();
    this.profil = localStorage.getItem('id');
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++"+this.profil);
  }
  detail() {
    this.result = this.donnee; 
   //console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++"+JSON.stringify(this.result));
   //console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++"+localStorage.getItem('id'));
    this.demandevehiculeService.getUserbyId(this.result.owner).subscribe((data: any) => {
      this.email = data.data.utiEmail
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++"+JSON.stringify(data));
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
