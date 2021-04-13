import { GenerernumimmatService } from '../../service/generernumimmat.service';
import { Generernumimmat } from '../../model/generernumimmat';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { ConsultComponent } from '../consult/consult.component';
import { ConsultCertiComponent } from '../consultCerti/consultCerti.component';
import { ConsultAttesttComponent } from '../consultAttest/consultAttest.component';
import { ConsultAssuComponent } from '../consultAssu/consultAssu.component';
import { ConsultVentComponent } from '../consultVent/consultVent.component';
@Component({
  selector: 'app-add-generernumimmat',
  templateUrl: './add-generernumimmat.component.html',
  styleUrls: ['./add-generernumimmat.component.scss']
})
export class AddGenerernumimmatComponent implements OnInit {
  result: any;
  public generernumimmat: Array<File>;
  @Input() accept = '.'; resp: any;
  isFileValid: boolean;
  images;
  href: any
  base64Data: any;
  based
  isUpload: boolean;
  sousmissionPrecedente;
isfile:boolean;
extention:any;

emaildemandeur:any
GenerernumimmatForm = this.formbuild.group({numeroimmat :[''],
valider :['', Validators.required],
motifrejet :[''],
poOwner :['', Validators.required],
owner :['', Validators.required],
 idLink:['',Validators.required]});
 constructor(private generernumimmatService: GenerernumimmatService,
    private router: Router, private formbuild: FormBuilder,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public donner: any,
    private dialogRef1: MatDialog,
     public dialogRef: MatDialogRef<AddGenerernumimmatComponent>) { this.isfile = false }

  ngOnInit() {

      this.generernumimmatService.getDemandevehiculeByid(this.donner.data.id).subscribe((data:any)=>{
        this.sousmissionPrecedente=data.data;
console.log("++++++++++++++++++++++++++++++++++"+JSON.stringify(this.sousmissionPrecedente.owner));
this.emaildemandeur = this.sousmissionPrecedente.email
this.GenerernumimmatForm.setValue({
  numeroimmat :this.sousmissionPrecedente.numeroimmat,
  valider :'',
  motifrejet :'',
  poOwner :[''],
  owner :[''],
   idLink:['']});

    })

  }

  onSubmit() {

    this.GenerernumimmatForm.value.poOwner = localStorage.getItem("profile")
    this.GenerernumimmatForm.value.owner = localStorage.getItem("id")
    
    console.log(this.GenerernumimmatForm.value.motifrejet)
    if (this.donner) {
      this.GenerernumimmatForm.value.idLink = this.donner.data.id
    }
    else {
      this.GenerernumimmatForm.value.idLink = null
    }
    this.generernumimmatService.createGenerernumimmat(this.GenerernumimmatForm.value).subscribe(data => {

      this.result = data

      if (this.result.statut) {
        if (this.GenerernumimmatForm.value.valider) {
          this.generernumimmatService.updateTaskGenerernumimmat(this.donner.data.id, this.donner.status, this.GenerernumimmatForm.value.numeroimmat).subscribe(data => {

          })
          this.notification.info(this.result.description);
          this.GenerernumimmatForm.reset();
          this.closeDialog();
        } else {

          this.generernumimmatService.updateTaskGenerernumimmatMotif(this.donner.data.id,'7','null',this.GenerernumimmatForm.value.motifrejet).subscribe((data:any)=>{
            console.log("llllllllllllllllll"+JSON.stringify(this.sousmissionPrecedente))
            if (data.statut) {
              this.generernumimmatService.sendNotifcation(this.sousmissionPrecedente.owner).subscribe(data => {

              })
            }
          })
          this.notification.info(this.result.description);
          this.GenerernumimmatForm.reset();
          this.closeDialog();
        }

      }
    }, error => {
      this.notification.error('Generernumimmat invalide');
    });

  }


  closeDialog() {
    this.dialogRef.close();
  }

  openDialogAdd(): void {
		const dialog = this.dialogRef1.open(ConsultComponent, {
			width: '700px',
			data: this.sousmissionPrecedente
		}).afterClosed().subscribe(result => {
			//location.reload();
		});

  }


  openDialogAddCert(): void {
		const dialog = this.dialogRef1.open(ConsultVentComponent, {
			width: '700px',
			data: this.sousmissionPrecedente
		}).afterClosed().subscribe(result => {
			//location.reload();
		});

  }

  openDialogAddAtt(): void {
		const dialog = this.dialogRef1.open(ConsultAttesttComponent, {
			width: '700px',
			data: this.sousmissionPrecedente
		}).afterClosed().subscribe(result => {
			//location.reload();
		});

  }

  openDialogAddCerti(): void {
		const dialog = this.dialogRef1.open(ConsultCertiComponent, {
			width: '700px',
			data: this.sousmissionPrecedente
		}).afterClosed().subscribe(result => {
			//location.reload();
		});

  }

  openDialogAddAssu(): void {
		const dialog = this.dialogRef1.open(ConsultAssuComponent, {
			width: '700px',
			data: this.sousmissionPrecedente
		}).afterClosed().subscribe(result => {
			//location.reload();
		});

	}
}
