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
  selector: 'app-stat-demande',
  templateUrl: './stat-demande.component.html',
  styleUrls: ['./stat-demande.component.scss']
})
export class StatDemandeComponent implements OnInit {


  @Input() profil: any;
  widgets: any
  donnee: any
  donneeforcount: any
  totaldemande: any = 0
  donneeencours: any = 0
  donneeenenvalidation: any = 0
  donneeterminer: any = 0
  donneerejeter: any = 0
  totaldemandechart: any = 0
  donneeencourschart: any = 0
  donneeenenvalidationchart: any = 0
  donneeterminerchart: any = 0
  iduser=localStorage.getItem('id')
  idprofil=localStorage.getItem('profil');
  constructor(private router: Router, private appService: ApplicationService, private userService: UserService,
    public paramService: ParametreService,
    private widgetService: WidgetService,
    private usersService: UserService,
    private translate: TranslateService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.profil = localStorage.getItem('profil');
     //this.mesDemande(localStorage.getItem('id'));

  }
  ngAfterViewInit() {
    this.widgetService.allWidgetByProfilId(this.profil).subscribe(data => {
      this.widgets = data.data;
    });
    
  }
  ngOnInit() {

     this.enCour(this.iduser)
     this.Terminer(this.iduser)
     this.Rejeter(this.iduser)
  }
  
 enCour(owner){
    
    this.widgetService.totalEnCoursDemandeur(this.iduser).subscribe(data => { 
      this.donnee = data
      if (this.donnee.statut == true) {   
        this.donneeencours = this.donnee.data 
      } else {
        window.alert(this.donnee.description);
      }
    })

    
  }

  Terminer(owner){
    this.widgetService.totalValiderDemandeur(this.iduser).subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {
        this.donneeterminer = this.donnee.data
      }
    })
  }

  Rejeter(owner){
    this.widgetService.totalRejetDemandeur(this.iduser).subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {
        this.donneerejeter = this.donnee.data
      }
    })
  }

  /*mesDemande(owner) {
    this.widgetService.getDemandevehiculeAll(localStorage.getItem('id')).subscribe(data => {
      this.donnee = data
      if (this.donnee.statut == true) {
        this.donneeforcount = this.donnee.data;
        for (let i = 0; i < this.donneeforcount.length; i++) {
          if (this.donneeforcount[i].poOwner == this.profil) {
            
              
            
            if(this.donneeforcount[i].status == 2 || this.donneeforcount[i].status == 3) this.donneeencours++;
            // if (this.donneeforcount[i].status == 3) this.donneeenenvalidation++;
            if (this.donneeforcount[i].status == 5) this.donneeterminer++;
             if (this.donneeforcount[i].status == 7) this.donneerejeter++;
          }
        }
      }
    })
  }  */

}
