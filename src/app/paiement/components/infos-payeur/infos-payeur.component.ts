import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { InscriptionService } from 'src/app/inscription/services/inscription.service';
import { PaiementService } from '../../service/paiement.service';
import { MainContentPaiementComponent } from '../main-content-paiement/main-content-paiement.component';

@Component({
  selector: 'app-infos-payeur',
  templateUrl: './infos-payeur.component.html',
  styleUrls: ['./infos-payeur.component.scss']
})
export class InfosPayeurComponent implements OnInit {
  url;
  tarif:any
  //url:string="http://196.207.202.51:8080/opay/?opayin=";
  factureForm = this.formbuild.group({
    idFacture: ['', Validators.required],
    montantFacture: [''],
    nomPayeur: [''],
    prenomPayeur: [''],
    usernamePayeur: [localStorage.getItem('username')],

  });
  constructor(public router: Router,
    private route: ActivatedRoute,
    private formbuild: FormBuilder,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
    private inscriptionService: InscriptionService,
    public dialogRef: MatDialog,
    private notification: NotificationService,
    private paiementService: PaiementService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public donner: any ) {


     }

  ngOnInit() {
    this.paiementService.getTaskIdLink(this.donner.id).subscribe(data=>{
      console.log(data.data)

      this.factureForm.setValue({
        idFacture:this.donner.id,
        montantFacture: data.data.tarif,
        nomPayeur: localStorage.getItem("nom"),
        prenomPayeur: localStorage.getItem("prenom"),
        usernamePayeur: localStorage.getItem('username'),
      })
    })

  }

  get f() { return this.factureForm.controls; }


  onSubmit() {
    if (this.factureForm.valid) {
      this.paiementService.payer(this.factureForm.value).subscribe(data => {
        if (data.statut) {
          this.url = data.data;
          this.closeDialog();
          this.translate.get('paiement.initialisation').subscribe((res: string) => {
            this.notification.warn(res);
          });
          window.open(this.url,'_blank');
         // console.log(this.url);


        }
      })
    }
    else {
      this.translate.get('invalid-form').subscribe((res: string) => {
        this.notification.warn(res);
      });
    }

  }
  closeDialog() {
    this.dialogRef.closeAll();
  }

}
