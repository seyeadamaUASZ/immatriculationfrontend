import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/utilisateur/services/user.service';
import { ParametreService } from 'src/app/utilisateur/services/parametre.service';
import { WidgetService } from '../../../services/widget.service';
import { ApplicationService } from 'src/app/application/services/application.service';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-stat-traitant-un',
  templateUrl: './stat-traitant-un.component.html',
  styleUrls: ['./stat-traitant-un.component.scss']
})
export class StatTraitantUnComponent implements OnInit {


  @Input() profil: any;
  widgets: any
  donnee: any
  donneeforcount: any
  totaldemandevneuf: any = 0
  totaldemandevancien: any = 0
  totaldemandevencour: any = 0
  totaldemandevtraiter: any = 0
  totaldemandevtransmis: any = 0
  totaldemandevrejeter: any = 0
  totaldemandechart: any = 0
  donneeencourschart: any = 0
  donneeenenvalidationchart: any = 0
  donneeterminerchart: any = 0
  constructor(private router: Router, private appService: ApplicationService, private userService: UserService,
    public paramService: ParametreService,
    private widgetService: WidgetService,
    private usersService: UserService,
    private translate: TranslateService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.profil = localStorage.getItem('profil');
    // this.mesTraitement1();


  }
  ngAfterInit() {
  
    this.widget();
    
  }
  ngOnInit() {
    this.enCour()
    this.traiter()
    this.transmis()
    this.rejeter()
  }
  widget() {
    this.widgetService.allWidgetByProfilId(this.profil).subscribe(data => {
      this.widgets = data.data;
    });
  }

  enCour(){
    this.widgetService.totalDemandeEnCour().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {   
        this.totaldemandevencour = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    })
  }
  
  traiter(){
    this.widgetService.totalDemandeTraiter().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {  
        this.totaldemandevtraiter = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    })
  }
  
  transmis(){
    this.widgetService.totaldemandeTransmis().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {  
        this.totaldemandevtransmis = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    })
  }
  
  rejeter(){
    this.widgetService.totalDemandeRejeter().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {  
        this.totaldemandevrejeter = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    }) 
  }
 

}
