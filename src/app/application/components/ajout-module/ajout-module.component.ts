import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/utilisateur/services/user.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { AjoutAppComponent } from '../ajout-app/ajout-app.component';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import { FonctionnaliteService } from '../../services/fonctionnalite.service';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-ajout-module',
  templateUrl: './ajout-module.component.html',
  styleUrls: ['./ajout-module.component.scss']
})
export class AjoutModuleComponent implements OnInit {

  application: [];
  fonctionnalite: any[];

  ModuleForm = this.formbuild.group({
    modNom: ['', Validators.required],
    modCode: ['', Validators.required],
    modDescription: [''],
    fonModId: [''],

  });
  constructor(private formbuild: FormBuilder, private router: Router,
    private userService: UserService, private _snackBar: MatSnackBar,
    private fonctionnaliteService: FonctionnaliteService,
    private applicationService: ApplicationService,
    public dialogRef: MatDialogRef<AjoutAppComponent>, private translate: TranslateService,
    private notification: NotificationService) {

  }

  ngOnInit() {
    this.applicationService.listeApplication().subscribe(res => {
      this.application = res.data;
      console.log(this.application)


    });
  }
  //get f() { return this.ModuleForm.controls; }


  onSubmit() {
    if(this.ModuleForm.valid){
      this.applicationService.addModule(this.ModuleForm.value).subscribe(data => {
        console.log(data);
        if (data.statut) {
          this.translate.get(data.description).subscribe((res: string) => {
            this.notification.success(res);
          });
  
          this.ModuleForm.reset();
          this.closeDialog();
        }
      }, error => {
        this.translate.get(error).subscribe((res: string) => {
          this.notification.error(res);
        });
      });
    }else{
      let invalidForm;
      this.translate.get('application.invalid-form').subscribe((res: string) => {
        this.notification.error(res);
      });
    }
  
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
