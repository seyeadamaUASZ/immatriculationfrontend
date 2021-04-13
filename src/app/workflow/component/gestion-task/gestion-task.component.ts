import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task';
import { Workflowform } from '../../models/workflowform';
import { WorkflowService } from '../../services/workflow.service';
import { AddTransitionComponent } from '../add-transition/add-transition.component';
import { AddstatustaskComponent } from '../addstatustask/addstatustask.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { EditworkflowtaskComponent } from '../editworkflowtask/editworkflowtask.component';

@Component({
  selector: 'app-gestion-task',
  templateUrl: './gestion-task.component.html',
  styleUrls: ['./gestion-task.component.scss']
})
export class GestionTaskComponent implements OnInit {
  wrktask:any 
  wrkprofil:any 
  idwrkf:any
  tskId:any
  tskName:any

  containerId:any
  process_id:any
  elementform:any
  loading:boolean 
 
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSourceWrkfTask: MatTableDataSource<Task>;  
  displayedColumns: string[] = ['tskId', 'tskName', 'poOwner.proLibelle','action'];
  constructor(
    private route: ActivatedRoute,private _snackBar: MatSnackBar, 
    private dialog: MatDialog,private workflowService:WorkflowService,private notification: NotificationService, private translate: TranslateService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idwrkf = params.get("idwrkf")
      this.process_id = params.get("processid")
      this.containerId = params.get("containerid")
      this.tskId=params.get("taskid")
    })
    this.listetaskparid(this.idwrkf)
  }

  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSourceWrkfTask.filter = filterValue.trim().toLowerCase();
  }
 
  
  taskInfosAll(containerId:any,processId:any) {
    this.workflowService.taskInfosAll(this.containerId,this.process_id).subscribe(data => {  
      console.log(data);
      
    })
  }
   


  listetaskparid(idwrkf:any) {
    this.workflowService.listetaskparid(this.idwrkf).subscribe(data => {  

     
      if(data.statut){
        this.wrktask = data;
        console.log(JSON.stringify(this.wrktask))
          this.dataSourceWrkfTask = new MatTableDataSource<Task>(data.data.reverse());
          this.dataSourceWrkfTask.paginator = this.paginator;
          this.dataSourceWrkfTask.sort = this.sort;
  
      }
      
    })
  }
  
  
  

  openDialogAddform(): void {
    this.elementform= {
      wkfConteneur: this.containerId,
      wkfProcess_id: this.process_id,
      wkfid: this.idwrkf
    }; 
    const dialog1 = this.dialog.open(AddtaskComponent , {
      disableClose: true,
      data : this.elementform,
      width: '700px',
    }).afterClosed().subscribe(result => {
      this.listetaskparid(this.idwrkf)

    });
  }
  AddTransition(element){
    console.log(element);
    
    this.elementform= {
     wkfConteneur: this.containerId,
     wkfProcess_id: this.process_id,
     wkfid: this.idwrkf,
     idwrktsk: element.tskId,
     tskName:element.tskName
    }; 
    const dialog1 = this.dialog.open(AddTransitionComponent , {
      disableClose: true,
      data :  this.elementform,
      width: '700px',
    }).afterClosed().subscribe(result => {
    });
  }

  openDialogUpdateTask(element): void {
    this.elementform= {
      wkfConteneur: this.containerId,
      wkfProcess_id: this.process_id,
      wkfid: this.idwrkf,
      idtsk: element.tskId
    }; 
    const dialog1 = this.dialog.open(EditworkflowtaskComponent , {
      disableClose: true,
      data :  this.elementform,
      width: '700px',
    }).afterClosed().subscribe(result => {
      this.listetaskparid(this.idwrkf)

    });
  }

  openDialogAddstatus(): void {
     
    const dialog1 = this.dialog.open(AddstatustaskComponent , {
      disableClose: true, 
      width: '700px',
    }).afterClosed().subscribe(result => {
      //this.listFormulaireworkflow(this.containerId)

    });
  }
  
}
