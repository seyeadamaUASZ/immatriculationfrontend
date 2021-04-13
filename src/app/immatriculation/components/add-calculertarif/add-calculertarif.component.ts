import { CalculertarifService } from '../../service/calculertarif.service';
import { Calculertarif } from '../../model/calculertarif';
import { Component, OnInit,Input,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar,MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { GenerernumimmatService } from '../../service/generernumimmat.service';
@Component({
  selector: 'app-add-calculertarif',
  templateUrl: './add-calculertarif.component.html',
  styleUrls: ['./add-calculertarif.component.scss']
})
export class AddCalculertarifComponent implements OnInit {
result:any;
  public calculertarif: Array<File>;
 @Input() accept = '.';resp:any;
 isFileValid: boolean;
  images;
  href:any
  base64Data: any;
  based
  isUpload: boolean;
isfile:boolean;
extention:any;
sousmissionPrecedente:any
CalculertarifForm = this.formbuild.group({
fraistraitementdossier :['', Validators.required],
tarif :['', Validators.required],
taxeco2 :['', Validators.required],
taxeparafiscale :['', Validators.required],
taxeregionale :['', Validators.required],
poOwner :['', Validators.required],
owner :['', Validators.required],
 idLink:['',Validators.required]});
 constructor(private calculertarifService: CalculertarifService,
    private router: Router, private formbuild: FormBuilder,
    private _snackBar: MatSnackBar,
	private translate:TranslateService,
private notification: NotificationService,
private generernumimmatService: GenerernumimmatService,
@Inject(MAT_DIALOG_DATA) public donner: any    ,public dialogRef: MatDialogRef<AddCalculertarifComponent >) {

}

  ngOnInit() {

    this.generernumimmatService.getDemandevehiculeByid(this.donner.data.id).subscribe((data:any)=>{
      this.sousmissionPrecedente=data.data;
    })


  }


onSubmit() {
this.CalculertarifForm.value.poOwner=localStorage.getItem("profile")
this.CalculertarifForm.value.owner=localStorage.getItem("id")

if( this.CalculertarifForm.value.fraistraitementdossier <=0 
  || this.CalculertarifForm.value.taxeco2 <=0 || this.CalculertarifForm.value.taxeparafiscale <=0
  || this.CalculertarifForm.value.taxeregionale <=0){
  this.translate.get("demandevehicule.calculertarifControlNotif").subscribe((res: string) => {
    this.notification.warn(res);
  });
  return;
}
if(this.donner)
{ this.CalculertarifForm.value.idLink=this.donner.data.id
}
else{this.CalculertarifForm.value.idLink=null}
this.CalculertarifForm.value.tarif = Number(this.CalculertarifForm.value.fraistraitementdossier)+Number(this.CalculertarifForm.value.taxeco2)+Number(this.CalculertarifForm.value.taxeparafiscale)+Number(this.CalculertarifForm.value.taxeregionale)
this.calculertarifService.createCalculertarif(this.CalculertarifForm.value).subscribe(data => {

  this.result=data

      if (this.result.statut) {
        this.generernumimmatService.updateTaskGenerernumimmat(this.donner.data.id,this.donner.status,this.sousmissionPrecedente.numeroimmat).subscribe(data=>{
          this.generernumimmatService.sendNotifcationForPaid(this.sousmissionPrecedente.owner).subscribe(data=>{

          })
        })
           this.notification.info(this.result.description);
        this.CalculertarifForm.reset();
        this.closeDialog();
      }
    }, error => {
     this.notification.error('Calculertarif invalide');
    });
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
