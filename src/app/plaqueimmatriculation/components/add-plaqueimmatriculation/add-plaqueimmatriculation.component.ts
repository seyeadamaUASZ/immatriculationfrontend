import { PlaqueImmatriculationService } from '../../service/plaqueimmatriculation.service';
import { PlaqueImmatriculation } from '../../model/plaqueimmatriculation';
import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
@Component({
  selector: 'app-add-plaqueimmatriculation',
  templateUrl: './add-plaqueimmatriculation.component.html',
  styleUrls: ['./add-plaqueimmatriculation.component.scss']
})
export class AddPlaqueImmatriculationComponent implements OnInit {
result:any;
  public plaqueimmatriculation: Array<File>;
 @Input() accept = '.';resp:any;
 isFileValid: boolean;
  images;
  href:any
  base64Data: any;
  based
  isUpload: boolean;
isfile:boolean;
extention:any;
startDate:any
PlaqueImmatriculationForm = this.formbuild.group({nbPlaceDebout :['', Validators.required],
nbPlaceAssises :['', Validators.required],
taxeRegionale :['', Validators.required],
taxeParafiscale :['', Validators.required],
taxeCO2 :['', Validators.required],
fraisTraitementDossier :['', Validators.required],
carosserie :['', Validators.required],
largeurVehicule :['', Validators.required],
longeurVehicule :['', Validators.required],
typeVarianteVersion :['', Validators.required],
genreVehicule :['', Validators.required],
regionExpedition :['', Validators.required],
tarif :['', Validators.required],
sexe :['', Validators.required],
region :['', Validators.required],
typeImmatriculation :['', Validators.required],
precedenteImmat :['', Validators.required],
dateImmatVehicule :['', Validators.required],
dateMiseCirculation :['', Validators.required],
datePrecedenteImmatriculation :['', Validators.required],
couleur :['', Validators.required],
marque :['', Validators.required],
puissance :['', Validators.required],
emission :['', Validators.required],
energie :['', Validators.required],
telephone :['', Validators.required],
dateNaissance :['', Validators.required],
lieuNaissance :['', Validators.required],
nom :['', Validators.required],
email :['', Validators.required],
prenom :['', Validators.required],
numeroImmatriculation :['', Validators.required],
 });  constructor(private plaqueimmatriculationService: PlaqueImmatriculationService,
    private router: Router, private formbuild: FormBuilder,
    private _snackBar: MatSnackBar,
	private translate:TranslateService,
private notification: NotificationService,
    public dialogRef: MatDialogRef<AddPlaqueImmatriculationComponent >) {this.isfile=false }

  ngOnInit() {
  }

onSubmit() {
    this.plaqueimmatriculationService.createPlaqueImmatriculation(this.PlaqueImmatriculationForm.value).subscribe(data => {

  this.result=data

      if (this.result.statut) {
        this.notification.info(this.result.description);
        this.PlaqueImmatriculationForm.reset();
        this.closeDialog();
      }
    }, error => {
     this.notification.error('PlaqueImmatriculation invalide');
    });
  }


  closeDialog() {
    this.dialogRef.close();
  }
}
