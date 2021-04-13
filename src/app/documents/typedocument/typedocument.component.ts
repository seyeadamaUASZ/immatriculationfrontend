import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { UserService } from 'src/app/utilisateur/services/user.service';
import { TypeDocuments } from '../model/TypeDocuments';
import { DocumentService } from '../services/document.service';
import { AjouterTypedocumentComponent } from './ajouter-typedocument/ajouter-typedocument.component';
import { EditerTypedocumentComponent } from './editer-typedocument/editer-typedocument.component';

@Component({
  selector: 'app-typedocument',
  templateUrl: './typedocument.component.html',
  styleUrls: ['./typedocument.component.scss']
})
export class TypedocumentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	documents;
  dataSource: MatTableDataSource<TypeDocuments>;
  dctId
  fileURL
  blob

  constructor(private router: Router, private documentService:DocumentService,  private dialog: MatDialog,
    private notification: NotificationService,
    private dialogRef: MatDialog,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar, private usersService: UserService, private translate: TranslateService) {

     }
     displayedColumns: string[] = [ 'tydLibelle', 'tydDescription', 'action'];

  ngOnInit() {
    this.getListTypeDocument();
  }

  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
  getListTypeDocument(){
    this.documentService.getTypeDocuments().subscribe(data=>{
      if(data.statut){
        this.documents = data.data;
        console.log( this.documents);
          this.dataSource = new MatTableDataSource<TypeDocuments>(data.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

      }
    })
  }
  openDialogAdd(): void{
    //this.router.navigate(['/document/creation']);
    this.dialog.open(AjouterTypedocumentComponent, {
      disableClose: true,
      width: '700px',
    }).afterClosed().subscribe(data => {
      this.getListTypeDocument();

    });

  }
  openDialogUpdate(document): void{
    this.dialog.open(EditerTypedocumentComponent, {
      disableClose: true,
      width: '700px',
      data:document
    }).afterClosed().subscribe(data => {
      this.getListTypeDocument();

    });

  }
  openDialogDeleteDocument(document){
    const message = "Alert.confirm-action";
    const dialogData = new ConfirmDialogModel('typedocument.alert-suppression', message);
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.delete(document);
      }
    });

  }

  delete(document) {
    let messageSuccess;
    let messageError;
    this.translate.get('document.confirm-suppression').subscribe((res: string) => {
      messageSuccess = res;
    });
    this.translate.get('document.erreur-suppression').subscribe((res: string) => {
      messageError = res;
    });
    this.documentService.deleteTypeDoc(document).subscribe(data => {
      if (data.statut) {
        this.snackBar.open(messageSuccess, 'Verification', {
          duration: 2000,
        });
      } else {
        this.snackBar.open(messageError, 'Verification', {
          duration: 2000,
        });
      }
    this.getListTypeDocument();
    });
  }

  allocaterights(typedocument){
		 this.router.navigate(['/document/typedocument/allocation'], {
            state: {typedocument:typedocument}
          });
	}

}
