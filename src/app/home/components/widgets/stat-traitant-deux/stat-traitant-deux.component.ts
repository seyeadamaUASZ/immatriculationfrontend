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
  selector: 'app-stat-traitant-deux',
  templateUrl: './stat-traitant-deux.component.html',
  styleUrls: ['./stat-traitant-deux.component.scss']
})
export class StatTraitantDeuxComponent implements OnInit {
  @Input() profil: any;
  widgets: any
  donnee:any
  donneeforcount:any
 totaldemandevneuf:any=0
 totaldemandevancien:any=0
 totaldemandevencour:any=0
 totaldemandevtransmis:any=0
 totaldemandevalider:any=0
  totaldemandechart:any=0
  donneeencourschart:any=0
  donneeenenvalidationchart:any=0
  donneeterminerchart:any=0
  constructor(private router: Router, private appService: ApplicationService,private userService: UserService,
    public paramService: ParametreService,
    private widgetService: WidgetService,
    private usersService: UserService,
    private translate: TranslateService) {
      monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.profil = localStorage.getItem('profil');
    //this.mesTraitement2();


  }
  ngAfterViewInit(){
    this.widget();
    //this.mesTraitement2();
  }
   
  ngOnInit() {   
       this.enCour()
       this.valider()
  }
  widget(){
    this.widgetService.allWidgetByProfilId(this.profil).subscribe(data => {
      this.widgets = data.data;   
    }); 
  }
  enCour(){
    this.widgetService.totalDemandeEnCourAdmin2().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {   
        this.totaldemandevencour = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    })
  }
  
   
  valider(){
    this.widgetService.totaldemandeTransmis().subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {  
        this.totaldemandevalider = this.donnee.data
         
      } else {
        window.alert(this.donnee.description);
      }
    })
  }
  /*mesTraitement2() {
		this.widgetService.findAllDemandes().subscribe(data => {
			this.donnee = data
			if (this.donnee.statut == true) { 
          console.log('------------------------------'+JSON.stringify(this.donnee.data)); 
         this.donneeforcount = this.donnee.data   
        for (let i = 0; i < this.donneeforcount.length; i++) {   
            if(this.donneeforcount[i].status == 3)this.totaldemandevencour++;
            if(this.donneeforcount[i].status == 5)this.totaldemandevalider++; 
           // console.log('------------------------------'+JSON.stringify(this.donneeforcount[i].typedemande));  
        } 
     
			} 
		})
	}*/
}
