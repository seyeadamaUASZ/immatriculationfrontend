import { Component, OnInit, ViewChild, AfterViewInit, Input, QueryList, ViewChildren } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { AddDemandevehiculeComponent } from '../add-demandevehicule/add-demandevehicule.component';
import { AddGenerernumimmatComponent } from '../add-generernumimmat/add-generernumimmat.component';
import { AddCalculertarifComponent } from '../add-calculertarif/add-calculertarif.component';
import { ViewDemandevehiculeComponent } from '../view-demandevehicule/view-demandevehicule.component';
import { DemandevehiculeService } from '../../service/demandevehicule.service';
import { Demandevehicule } from '../../model/demandevehicule';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/sharedcomponent/confirm-dialog/confirm-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../../shared/services/notification.service';
import * as fileSaver from 'file-saver';
import { InfosPayeurComponent } from 'src/app/paiement/components/infos-payeur/infos-payeur.component';
import { FichierService } from 'src/app/fichier/services/fichier.service';
import { WidgetService } from 'src/app/home/services/widget.service';

@Component({
	selector: 'Demandevehicule',
	templateUrl: './Demandevehicule.component.html',
	styleUrls: ['./Demandevehicule.component.scss']
})
export class DemandevehiculeComponent implements OnInit {
	@ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
	@ViewChild(MatSort) sort: MatSort;
	form;
	elementuser: any
	result: any
	dataSource: MatTableDataSource<Demandevehicule>;
	dataSourceTraitement: MatTableDataSource<Demandevehicule>;

	langue;
	task: any = []
	status: any
	payLoad = '';
	exportFileId: any;
	previousUrl: String;
	dataValue
	href
	display = false;
	blob
	@Input() profil: any;
	widgets: any
	b;
	l;
	charger=true;
	profilLibelle;
	constructor(private demandevehiculeService: DemandevehiculeService, private dialogRef: MatDialog,
		private router: Router, private translate: TranslateService, private fichierService: FichierService,
		private widgetService: WidgetService,) {
	}
	// displayedColumns: string[] = ['adresse','carosserie','codecession','couleur','datenaissance','email','emissionco2','energie','genrevehicule','largeur','lieunaissance','longeur','marque','nom','numeroimmat','placesassises','placesdebout','prenom','puissance','region','sexe','telephone','typedemande','typeusage','typevarianteversion','action'];
	displayedColumns: string[] = ['nom', 'prenom', 'telephone', 'typedemande', 'status', 'action'];


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	applyFiltertraite(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSourceTraitement.filter = filterValue.trim().toLowerCase();
	}

	ngAfterViewInit() {
		this.verifyGenerernumimmat();
		this.verifyCalculertarif();
		this.listeRapportGenerer();
		this.listeRapportGenerer();

		//this.listDemandevehicule();
		this.verifyDemandevehicule();
		this.verifyApayer()

	}
	ngOnInit() {
		this.widget();

	}
	widget() {
		this.profil = localStorage.getItem('profil');
		this.widgetService.allWidgetByProfilId(this.profil).subscribe(data => {
			this.widgets = data.data;
		});
	}

	listDemandevehicule() {
		this.demandevehiculeService.getDemandevehiculeAll(localStorage.getItem('id')).subscribe(data => {
			this.form = data
			if (this.form.statut) {
				this.dataSource = new MatTableDataSource<Demandevehicule>(this.form.data.reverse());
				this.dataSource.paginator = this.paginator.toArray()[0];
				this.dataSource.sort = this.sort;
			}
		})
	}

	listDemandevehicule1() {
		this.demandevehiculeService.getDemandevehiculeAllTraitant1().subscribe(data => {
			this.form = data
			if (this.form.statut) {
				//console.log(this.form);
				this.dataSourceTraitement = new MatTableDataSource<Demandevehicule>(this.form.data.reverse());
				this.dataSourceTraitement.paginator = this.paginator.toArray()[1];
				this.dataSourceTraitement.sort = this.sort;
			}
		})
	}
	listDemandevehicule2() {
		this.demandevehiculeService.getDemandevehiculeAllTraitant2().subscribe(data => {
			this.form = data
			if (this.form.statut) {
				//console.log('----------------+--------------' + JSON.stringify(this.form.data));
				//console.log(this.form);
				this.dataSourceTraitement = new MatTableDataSource<Demandevehicule>(this.form.data.reverse());
				this.dataSourceTraitement.paginator = this.paginator.toArray()[1];
				this.dataSourceTraitement.sort = this.sort;
			}
		})
	}
	listTask(poowner) {
		this.demandevehiculeService.getTask(poowner).subscribe(data => {
			this.form = data
			if (this.form.statut) {
				//console.log('------------------------------');
				//console.log(this.form);
				this.dataSource = new MatTableDataSource<Demandevehicule>(this.form.data.reverse());
				this.dataSource.paginator = this.paginator.toArray()[0];
				this.dataSource.sort = this.sort;
			}
		})
	}
	openDialogAdd(): void {
		const dialog = this.dialogRef.open(AddDemandevehiculeComponent, {
			width: '700px',
			data: this.status,
			disableClose: true,

		}).afterClosed().subscribe(result => {
			//location.reload();
			this.listDemandevehicule();
		});
	}
	openDialogView(username) {
		/*this.elementuser= { 
			wkfConteneur: containerId, 
			wkfProcess_inst_id: procIntId
		  }; */
		console.log(username);
		const dialog1 = this.dialogRef.open(ViewDemandevehiculeComponent, {
			width: '900px',
			data: username,
			disableClose: true,
		}).afterClosed().subscribe(result => {
			//location.reload();
			if (this.demandevehicule) {
				this.listDemandevehicule();
			}
			else {
				this.listTask(localStorage.getItem('profil'))
			}
		});
	}

	demandevehicule: boolean = false
	verifyDemandevehicule() {
		this.demandevehiculeService.getAllTask().subscribe(data => {
			this.task = data
			//console.log(this.task.data)
			for (let i = 0; i < this.task.data.length; i++) {
				if (this.task.data[i].poOwner.proId == localStorage.getItem("profil") && this.task.data[i].tskFormName == 'Demandevehicule') {
					this.demandevehicule = true
					this.listDemandevehicule();
					this.demandevehiculeService.getStatus(this.task.data[i].tskId).subscribe((data: any) => {
						this.status = data.data
					})
					break
				}
			}
		})
	}


	apayer: any
	verifyApayer() {
		this.demandevehiculeService.getAllTask().subscribe(data => {
			this.task = data
		})
	}

	openApayer(element) {
		const dialog1 = this.dialogRef.open(InfosPayeurComponent, {
			disableClose: true,
			width: '500px',
			data: element
		}).afterClosed().subscribe(result => {
			this.listDemandevehicule();
		});

	}

	generernumimmat = false
	verifyGenerernumimmat() {
		//this.charger=true;
		this.demandevehiculeService.getAllTask().subscribe(data => {
			this.task = data
			///console.log(this.task.data)
			for (let i = 0; i < this.task.data.length; i++) {
				if (this.task.data[i].poOwner.proId == localStorage.getItem("profil") && this.task.data[i].tskFormName == 'Generernumimmat') {
					this.generernumimmat = true
					this.listDemandevehicule1();
					//this.charger=false;
					this.listTask(localStorage.getItem('profil'))
					this.demandevehiculeService.getStatus(this.task.data[i].tskId).subscribe((data: any) => {
						this.status = data.data
					})
					break
				}
			}
		})
	}
	openDialogGenerernumimmat(data) {
		const dialog1 = this.dialogRef.open(AddGenerernumimmatComponent, {
			width: '700px',
			data: { data: data, status: this.status },
			disableClose: true,
		}).afterClosed().subscribe(result => {
			location.reload();
			this.verifyGenerernumimmat()
			//this.listTask(localStorage.getItem('profil'))
		});
	}


	calculertarif = false;
	verifyCalculertarif() {
		//this.charger=true;
		this.demandevehiculeService.getAllTask().subscribe(data => {
			this.task = data
			//	console.log(this.task.data)
			for (let i = 0; i < this.task.data.length; i++) {
				if (this.task.data[i].poOwner.proId == localStorage.getItem("profil") && this.task.data[i].tskFormName == 'Calculertarif') {
					this.calculertarif = true
					this.listDemandevehicule2();
					//this.charger=false;
					this.listTask(localStorage.getItem('profil'))
					this.demandevehiculeService.getStatus(this.task.data[i].tskId).subscribe((data: any) => {
						this.status = data.data
					})
					break
				}
			}
		})
	}
	openDialogCalculertarif(data) {
		const dialog1 = this.dialogRef.open(AddCalculertarifComponent, {
			width: '700px',
			data: { data: data, status: this.status },
			disableClose: true,
		}).afterClosed().subscribe(result => {
			location.reload();
			this.listTask(localStorage.getItem('profil'))
			this.listDemandevehicule2()
		});
	}

	rapportGeneres: any
	listeRapportGenerer() {
		this.fichierService.listeRapportGenerer().subscribe(res => {
			this.rapportGeneres = res.data;
		})
	}

	genererRapportPdf(data) {
		this.payLoad = JSON.stringify({ "immatriculation": data.numeroimmat });
		//	console.log(this.rapportGeneres[0].rptId)
		let varr = this.fichierService.genererCertificatPdf(this.rapportGeneres[0].rptId, this.payLoad).subscribe((response) => {
			const file = new Blob([response], { type: 'application/pdf' });
			const fileURL = URL.createObjectURL(file);
			window.open(fileURL);
		});
	}
}
