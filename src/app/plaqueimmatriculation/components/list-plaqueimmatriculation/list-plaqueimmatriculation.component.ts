import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AddPlaqueImmatriculationComponent } from '../add-plaqueimmatriculation/add-plaqueimmatriculation.component';
import { EditPlaqueImmatriculationComponent } from '../edit-plaqueimmatriculation/edit-plaqueimmatriculation.component';
import { ViewPlaqueImmatriculationComponent } from '../view-plaqueimmatriculation/view-plaqueimmatriculation.component';
import { PlaqueImmatriculationService } from '../../service/plaqueimmatriculation.service';
import { PlaqueImmatriculation} from '../../model/plaqueimmatriculation';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import * as fileSaver from 'file-saver';

@Component({
	selector: 'list-PlaqueImmatriculation',
	templateUrl: './list-PlaqueImmatriculation.component.html',
	styleUrls: ['./list-PlaqueImmatriculation.component.scss']
})
export class ListPlaqueImmatriculationComponent implements AfterViewInit {
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	form;
 result:any
	dataSource: MatTableDataSource<PlaqueImmatriculation>;
   langue;
	constructor(private plaqueimmatriculationService: PlaqueImmatriculationService, private dialogRef: MatDialog,
		private route: ActivatedRoute,
		private formbuild: FormBuilder,
		private _snackBar: MatSnackBar, 
		private translate: TranslateService,
		private notification: NotificationService,		private router: Router) {
	}
	displayedColumns: string[] = ['telephone','nom','prenom','numeroImmatriculation','action'];

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	ngAfterViewInit() {
		this.listPlaqueImmatriculation();
	}
	ngOnInit() {
		}

	listPlaqueImmatriculation() {
		this.plaqueimmatriculationService.getPlaqueImmatriculationAll().subscribe(data => {
this.form = data
			if (this.form.statut) {
				//console.log('------------------------------');
				console.log(this.form);
				this.dataSource = new MatTableDataSource<PlaqueImmatriculation>(this.form.data);
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			} else {
				window.alert(this.form.description);
			}
		})
	}


	openDialogAdd(): void {
		const dialog = this.dialogRef.open(AddPlaqueImmatriculationComponent, {
			width: '700px',

		}).afterClosed().subscribe(result => {
			//location.reload();
			this.listPlaqueImmatriculation();
		});

	}
	openDialogUpdate(username) {
		console.log(username);
		const dialog1 = this.dialogRef.open(EditPlaqueImmatriculationComponent, {
			width: '700px',
			data: username
		}).afterClosed().subscribe(result => {
			//location.reload();
			this.listPlaqueImmatriculation();
		});
	}
openDialogDeleteUser(username) {
		const message = "utilisateur.alert-suppression";
		const dialogData = new ConfirmDialogModel("utilisateur.titre-suppression", message);
		const dialogRef = this.dialogRef.open(ConfirmDialogComponent, {
			maxWidth: "400px",
			data: dialogData
		});
		dialogRef.afterClosed().subscribe(dialogResult => {
			if (dialogResult === true) {
				this.delete(username);
			}
		});
	}
 delete(data) {
		let messageSuccess;
		let messageError;
		this.translate.get('plaqueimmatriculation.confirm-suppression').subscribe((res: string) => {
			messageSuccess = res;
		});
		this.translate.get('plaqueimmatriculation.erreur-suppression').subscribe((res: string) => {
			messageError = res;
		});
		this.plaqueimmatriculationService.deletePlaqueImmatriculation(data).subscribe(data => {
				this.result=data
			if (this.result.statut) {
				 this.notification.info(messageSuccess);
			} else {
				 this.notification.error(messageError);
			}
			this.listPlaqueImmatriculation();
		});
	}
openDialogView(username) {
		console.log(username);
		const dialog1 = this.dialogRef.open(ViewPlaqueImmatriculationComponent, {
			width: '700px',
			data: username
		}).afterClosed().subscribe(result => {
			//location.reload();
			this.listPlaqueImmatriculation();
		});
	}
}