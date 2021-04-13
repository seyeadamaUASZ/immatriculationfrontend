import { PlaqueImmatriculationService } from '../../service/plaqueimmatriculation.service';
import { PlaqueImmatriculation } from '../../model/plaqueimmatriculation';
import { Component, OnInit,Inject,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar,MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from '../../../shared/services/notification.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-edit-plaqueimmatriculation',
  templateUrl: './edit-plaqueimmatriculation.component.html',
  styleUrls: ['./edit-plaqueimmatriculation.component.scss']
})
export class EditPlaqueImmatriculationComponent implements OnInit {
result:any
 @Input() accept = '.';
isFileValid: boolean;
  images;
  href:any
  base64Data: any;
  based
  isUpload: boolean
  startDate:any
 public plaqueimmatriculation: Array<File>;
PlaqueImmatriculationForm = this.formbuild.group({
id :['', Validators.required],
nbPlaceDebout :['', Validators.required],
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
private notification: NotificationService,
private translate:TranslateService,
    public dialogRef: MatDialogRef<EditPlaqueImmatriculationComponent>,@Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
this.initView();
  }
initView() {
    this.PlaqueImmatriculationForm.setValue({
     id: this.donnee.id,
nbPlaceDebout:this.donnee.nbPlaceDebout,
nbPlaceAssises:this.donnee.nbPlaceAssises,
taxeRegionale:this.donnee.taxeRegionale,
taxeParafiscale:this.donnee.taxeParafiscale,
taxeCO2:this.donnee.taxeCO2,
fraisTraitementDossier:this.donnee.fraisTraitementDossier,
carosserie:this.donnee.carosserie,
largeurVehicule:this.donnee.largeurVehicule,
longeurVehicule:this.donnee.longeurVehicule,
typeVarianteVersion:this.donnee.typeVarianteVersion,
genreVehicule:this.donnee.genreVehicule,
regionExpedition:this.donnee.regionExpedition,
tarif:this.donnee.tarif,
sexe:this.donnee.sexe,
region:this.donnee.region,
typeImmatriculation:this.donnee.typeImmatriculation,
precedenteImmat:this.donnee.precedenteImmat,
dateImmatVehicule:this.donnee.dateImmatVehicule,
dateMiseCirculation:this.donnee.dateMiseCirculation,
datePrecedenteImmatriculation:this.donnee.datePrecedenteImmatriculation,
couleur:this.donnee.couleur,
marque:this.donnee.marque,
puissance:this.donnee.puissance,
emission:this.donnee.emission,
energie:this.donnee.energie,
telephone:this.donnee.telephone,
dateNaissance:this.donnee.dateNaissance,
lieuNaissance:this.donnee.lieuNaissance,
nom:this.donnee.nom,
email:this.donnee.email,
prenom:this.donnee.prenom,
numeroImmatriculation:this.donnee.numeroImmatriculation,
 });}

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
