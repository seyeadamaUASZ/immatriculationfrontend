import { DemandevehiculeService } from '../../service/demandevehicule.service';
import { Demandevehicule } from '../../model/demandevehicule';
import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-demandevehicule',
  templateUrl: './add-demandevehicule.component.html',
  styleUrls: ['./add-demandevehicule.component.scss']
})
export class AddDemandevehiculeComponent implements OnInit {
  @ViewChild('file1', { static: true }) file1;
  @ViewChild('file2', { static: true }) file2;
  @ViewChild('file3', { static: true }) file3;
  @ViewChild('file4', { static: true }) file4;
  @ViewChild('file5', { static: true }) file5;
  ffile1:File;
  ffile2:File;
  ffile3:File;
  ffile4:File;
  ffile5:File;

  addFiles1() {
    this.file1.nativeElement.click();
  }
  onFilesAdded1() {
    
    this.ffile1 = this.file1.nativeElement.files[0];
    const extension = this.ffile1.name.split('.')[1].toLowerCase();
       if ( "pdf" != extension ) {
        this.translate.get("demandevehicule.fileExtenxionNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile1 =null;
        return;
       }
      if (this.ffile1.size >3000000){
        this.translate.get("demandevehicule.fileSizeNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile1 = null;
        return;
      }
    
  }

  addFiles2() {
    this.file2.nativeElement.click();
  }
  onFilesAdded2() {
    this.ffile2 = this.file2.nativeElement.files[0];
    const extension = this.ffile2.name.split('.')[1].toLowerCase();
       if ( "pdf" != extension ) {
        this.translate.get("demandevehicule.fileExtenxionNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile2 =null;
        return;
       }
      if (this.ffile2.size >3000000){
        this.translate.get("demandevehicule.fileSizeNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile2 = null;
        return;
      }
    
  }
  addFiles3() {
    this.file3.nativeElement.click();
  }
  onFilesAdded3() {
    this.ffile3 = this.file3.nativeElement.files[0];
    const extension = this.ffile3.name.split('.')[1].toLowerCase();
       if ( "pdf" != extension ) {
        this.translate.get("demandevehicule.fileExtenxionNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile3 =null;
        return;
       }
      if (this.ffile3.size >3000000){
        this.translate.get("demandevehicule.fileSizeNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile3 = null;
        return;
      }
  }
  addFiles4() {
    this.file4.nativeElement.click();
  }
  onFilesAdded4() {
    this.ffile4 = this.file4.nativeElement.files[0];
    const extension = this.ffile4.name.split('.')[1].toLowerCase();
       if ( "pdf" != extension ) {
        this.translate.get("demandevehicule.fileExtenxionNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile4 =null;
        return;
       }
      if (this.ffile4.size >3000000){
        this.translate.get("demandevehicule.fileSizeNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile4 = null;
        return;
      }
  }
  addFiles5() {
    this.file5.nativeElement.click();
  }
  onFilesAdded5() {
    this.ffile5 = this.file5.nativeElement.files[0];
    const extension = this.ffile5.name.split('.')[1].toLowerCase();
       if ( "pdf" != extension ) {
        this.translate.get("demandevehicule.fileExtenxionNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile5 =null;
        return;
       }
      if (this.ffile5.size >3000000){
        this.translate.get("demandevehicule.fileSizeNotif").subscribe((res: string) => {
          this.notification.warn(res);
        });
        this.ffile5 = null;
        return;
      }
  }
  filteredOptions: Observable<any[]>;
  listdemandes;
  result: any;
  public demandevehicule: Array<File>;
  @Input() accept = '.'; resp: any;
  isFileValid: boolean;
  images;
  href: any
  base64Data: any;
  based
  type:any
  isUpload: boolean;
  isfile: boolean;
  extention: any;
  DemandevehiculeForm = this.formbuild.group({
    adresse: [''],
    carosserie: [''],
    codecession: [''],
    couleur: [''],
    datemiseencirculation: [''],
    emissionco2: [''],
    energie: [''],
    genrevehicule: [''],
    largeur: [''],
    longeur: [''],
    marque: ['',],
    nom: ['', Validators.required],
    numeroimmat: ['',],
    placesassises: [''],
    placesdebout: [''],
    prenom: ['', Validators.required],
    puissance: [''],
    region: ['', Validators.required],
    sexe: ['', Validators.required],
    telephone: ['', Validators.required],
    typedemande: ['', Validators.required],
    typeusage: ['', Validators.required],
    typevarianteversion: [''],
    poOwner: ['', Validators.required],
    status: ['', Validators.required],
    owner: ['', Validators.required],
    idLink: ['', Validators.required]
  });
  typeVehicule: any
  constructor(private demandevehiculeService: DemandevehiculeService,
    private router: Router, private formbuild: FormBuilder,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public donner: any, public dialogRef: MatDialogRef<AddDemandevehiculeComponent>) { this.isfile = false }

  ngOnInit() {
    this.demandevehiculeService.findAllDemandesAutoComplete().subscribe((data: any) => {
      if (data.statut) {
        this.listdemandes = data.data;
      }

    }, (error) => { }, () => {
      this.filteredOptions = this.DemandevehiculeForm.controls['numeroimmat'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: string): any[] {
    const filterValue = value;
    return this.listdemandes.filter(option => option.includes(filterValue)
    );
  }
  readonlyforold=false;
  setReadeOnlyForOld(){
    if(this.typeVehicule=='ancien'){
      this.readonlyforold=true;
    }else{
      this.readonlyforold=false;

    }
  }
  setOldDemande(numeroimmat) {
    this.readonlyforold = false;
    this.demandevehiculeService.getDemandevehiculeByNumeroImmat(numeroimmat).subscribe((data: any) => {
      if (data.statut) {
        this.DemandevehiculeForm.setValue({
          adresse: this.DemandevehiculeForm.controls['adresse'].value,
          carosserie: data.data.carosserie,
          codecession: data.data.codecession,
          couleur: data.data.couleur,
          datemiseencirculation: data.data.datemiseencirculation?data.data.datemiseencirculation.replace('/-/g','/'):null,
          emissionco2: data.data.emissionco2,
          energie: data.data.energie,
          genrevehicule: data.data.genrevehicule,
          largeur: data.data.largeur,
          longeur: data.data.longeur,
          marque: data.data.marque,
          nom: this.DemandevehiculeForm.controls['nom'].value,
          numeroimmat: data.data.numeroimmat,
          placesassises: data.data.placesassises,
          placesdebout: data.data.placesdebout,
          prenom: this.DemandevehiculeForm.controls['prenom'].value,
          puissance: data.data.puissance,
          region: data.data.region,
          sexe: this.DemandevehiculeForm.controls['sexe'].value,
          telephone: this.DemandevehiculeForm.controls['telephone'].value,
          typedemande: this.DemandevehiculeForm.controls['typedemande'].value,
          typeusage: data.data.typeusage,
          typevarianteversion: data.data.typevarianteversion,
          poOwner: data.data.poOwner,
          status: data.data.status,
          owner: data.data.owner,
          idLink: ''

        });
        
      }
    })
    this.readonlyforold = true;
  }
  onSubmit() {
    this.DemandevehiculeForm.value.poOwner = localStorage.getItem("profile")
    this.DemandevehiculeForm.value.owner = localStorage.getItem("id")
    this.DemandevehiculeForm.value.status = this.donner

    this.DemandevehiculeForm.value.idLink = null
    this.DemandevehiculeForm.value.fileCin = this.ffile1
    this.DemandevehiculeForm.value.fileAssurance= this.ffile2
    this.DemandevehiculeForm.value.fileCertificatCirculation = this.ffile3
    this.DemandevehiculeForm.value.fileCertificatVente = this.ffile4
    this.DemandevehiculeForm.value.fileAttestationDic = this.ffile5
    
    if(!this.ffile1 || !this.ffile2 || !this.ffile3 || !this.ffile4){
      this.translate.get("demandevehicule.selectAllFilesNotif").subscribe((res: string) => {
        this.notification.warn(res);
      });
      return;
    }

    if(!this.DemandevehiculeForm.value.prenom || !this.DemandevehiculeForm.value.nom || 
      !this.DemandevehiculeForm.value.telephone || !this.DemandevehiculeForm.value.sexe || 
      !this.DemandevehiculeForm.value.typedemande || !this.DemandevehiculeForm.value.typeusage ||
      !this.DemandevehiculeForm.value.region ){

      this.translate.get("demandevehicule.renseignerInfosPersonnellesNotif").subscribe((res: string) => {
        this.notification.warn(res);
      });
      return;
      
    }

      this.demandevehiculeService.createDemandevehicule(this.DemandevehiculeForm.value).subscribe(data => {
        this.result = data
        if (this.result.statut) {
          this.notification.info(this.result.description);
          this.DemandevehiculeForm.reset();
          this.closeDialog();
        }
      }, error => {
        this.notification.error('error serveur');
      });


  }


  closeDialog() {
    this.dialogRef.close();
  }
}
