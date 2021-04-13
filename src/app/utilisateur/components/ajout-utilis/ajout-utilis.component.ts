import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { catchError, last, map, tap } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { HttpRequest, HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
      selector: 'app-ajout-utilis',
      templateUrl: './ajout-utilis.component.html',
      styleUrls: ['./ajout-utilis.component.scss'],
      animations: [
            trigger('fadeInOut', [
                  state('in', style({ opacity: 100 })),
                  transition('* => void', [
                        animate(300, style({ opacity: 0 }))
                  ])
            ])
      ]
})
export class AjoutUtilisComponent implements OnInit {
      profiles: any[];
      /** Link text */
      @Input() text = 'Upload';
      /** Name used in form which will be sent in HTTP request. */
      @Input() param = 'file';
      /** Target URL for file uploading. */
      @Input() target = 'localhost';
      /** File extension that accepted, same as 'accept' of <input type="file" />.
          By the default, it's set to 'image/*'. */
      // @Input() accept = 'image/*';
      @Input() accept = '.xlsx,.xls,.csv';
      /** Allow you to add handler after its completion. Bubble up response text from remote. */
      @Output() complete = new EventEmitter<string>();
      public ficheExcel: Array<File>;

      public files: Array<FileUploadModel> = [];
      loading: any;
      public registreForm = this.formbuild.group({
            utiPrenom: ['', Validators.required],
            utiNom: ['', Validators.required],
            utiUsername: ['', Validators.required],
            utiPassword: [''],
            utiTelephone: ['', Validators.required],
            utiEmail: ['', Validators.required],
            utiAdresse: ['', Validators.required],
            uti_pro_id: ['', Validators.required]
      });
      constructor(private formbuild: FormBuilder, private router: Router, private userService: UserService,
            public dialogRef: MatDialogRef<AjoutUtilisComponent>,
            private _snackBar: MatSnackBar,
            private _http: HttpClient,
            private notification:NotificationService,
            private translate: TranslateService) {

      }

      ngOnInit() {
            this.userService.listprofil().subscribe(res => {
                  this.profiles = res.data;

            });
      }

      get f() { return this.registreForm.controls; }

      /** Upload File debut code ***/

      onClick() {
            const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
            fileUpload.onchange = () => {
                  for (let index = 0; index < fileUpload.files.length; index++) {
                        const file = fileUpload.files[index];
                        this.files.push({
                              data: file, state: 'in',
                              inProgress: false, progress: 0, canRetry: false, canCancel: true
                        });
                  }
                  this.uploadFiles();
            };
            fileUpload.click();
      }

      cancelFile(file: FileUploadModel) {
            file.sub.unsubscribe();
            this.removeFileFromArray(file);
      }

      retryFile(file: FileUploadModel) {
            this.uploadFile(file);
            file.canRetry = false;
      }

      private uploadFile(file: FileUploadModel) {
            const fd = new FormData();
            fd.append(this.param, file.data);

            const req = new HttpRequest('POST', this.target, fd, {
                  reportProgress: true
            });

            file.inProgress = true;
            file.sub = this._http.request(req).pipe(
                  map(event => {
                        switch (event.type) {
                              case HttpEventType.UploadProgress:
                                    file.progress = Math.round(event.loaded * 100 / event.total);
                                    break;
                              case HttpEventType.Response:
                                    return event;
                        }
                  }),
                  tap(message => { }),
                  last(),
                  catchError((error: HttpErrorResponse) => {
                        file.inProgress = false;
                        file.canRetry = true;
                        return of(`${file.data.name} upload failed.`);
                  })
            ).subscribe(
                  (event: any) => {
                        if (typeof (event) === 'object') {
                              this.removeFileFromArray(file);
                              this.complete.emit(event.body);
                        }
                  }
            );
      }

      private uploadFiles() {
            const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
            fileUpload.value = '';

            this.files.forEach(file => {
                  //console.log("*** " + file.data.name + " ***");
                  this.uploadFile(file);
            });

            //console.log("*** ---" + this.files + "--- ***");
      }

      private removeFileFromArray(file: FileUploadModel) {
            const index = this.files.indexOf(file);
            if (index > -1) {
                  console.log(this.files.splice(index, 1));
            }
      }

      addUserByExcel() {

            const formData = new FormData();
            formData.append('excelFile', this.ficheExcel[0]);
            this.userService.chargerFile(formData).subscribe(
                  (res) => {
                        //alert(res.statut);
                        if (res.statut) {
                              this.translate.get(res.description).subscribe((res: string) => {
                                    this.notification.success(res);
                              });

                              /*this._snackBar.open(res.description, 'Confirmation', {
                                    duration: 2000,
            });*/

                              // alert(res.description);
                              this.closeDialog();
                        } else {
                              this.translate.get(res.description).subscribe((res: string) => {
                                    this.notification.warn(res);
                              });
/*
                              this._snackBar.open(res.description, 'Confirmation', {
                                    duration: 2000,
            });*/
                              //alert(res.description);
                        }
                  }, error => {
                        this.translate.get("Verifier les  données saisies dans le fichier excel!!").subscribe((res: string) => {
                                    this.notification.error(res);
                              });
                        /*this._snackBar.open("Verifier les  données saisies dans le fichier excel!!", 'Confirmation', {
                              duration: 2000,
            });*/
                        //alert("Verifier les  données saisies dans le fichier excel!!");
                  })

      }

      // method upload excel file
      uploadExcelFile(event: any) {
            if (event.target.files[0]) {
                  this.ficheExcel = event.target.files;
            }
      }

      /** Upload File fin code **/

      onSubmit() {
            this.loading = true;
            if (this.registreForm.valid) {
                  this.userService.registreUser(this.registreForm.value).subscribe(data => {
                        //console.log(data);
                        if (data.statut) {
                              this.translate.get(data.description).subscribe((res: string) => {
                                    this.notification.success(res);
                              });
                              //alert(data.description);
                              this.registreForm.reset();
                              this.closeDialog();
                        }
                        else{
                          this.translate.get(data.description).subscribe((res: string) => {
                            this.notification.warn(res);
                      });
                        }
                         this.loading = false;
                  }, error => {
                        this.translate.get(error).subscribe((res: string) => {
                                    this.notification.error(res);
                              });

                       /* this._snackBar.open(error, 'Confirmation', {
                              duration: 2000,
                  });*/
                        this.loading = false;
                        // alert('Formulaire invalide');
                  });
            }else{
                  this.translate.get('formulaire invalide').subscribe((res: string) => {
                        this.notification.error(res);
                  });

                  /*this._snackBar.open('formulaire invalide', 'Close', {
                        duration: 2000,
                        panelClass: ['mat-error', 'mat-toolbar' ]
                  });*/
                  this.loading = false;
            }

      }


      closeDialog() {
            this.dialogRef.close();
      }
}

export class FileUploadModel {
      data: File;
      state: string;
      inProgress: boolean;
      progress: number;
      canRetry: boolean;
      canCancel: boolean;
      sub?: Subscription;
}
