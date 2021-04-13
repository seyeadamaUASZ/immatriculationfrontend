import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profil } from '../models/profil';

@Injectable({
    providedIn: 'root'
})

export class WidgetService {
    api = environment.apii;
    constructor(private http: HttpClient) { }

    listeWidget() {
        return this.http.get<any>(this.api + 'listwidget');
    }

    infoWidget(id: any) {
        return this.http.get<any>(this.api + 'widget', id);
    }

    allWidgetByProfilId(id: any) {
        return this.http.get<any>(this.api + 'listwidgetbyprofilid/'+id);
    }

    listeStatProfil() {
        return this.http.get<any>(this.api + 'widget/getStatProfil');
    }
     /*++++++++++++++++++++++++++++++source demandeurs++++++++++++++++++++++++++++++++++++++++++++++++++*/
     getDemandevehiculeAll(owner){
        return this.http.get(this.api+"demandevehicule/list/"+owner)
  }

  getTask(poowner){
    return this.http.get(this.api+"demandevehicule/task/"+poowner)
 }
 getStatus(taskId){
  return this.http.get(this.api+"transition/statusAfterExecution/"+taskId)
 }
 findAllDemandes(){
    return this.http.get(this.api+"demandevehicule/list")
}
/*+++++++++++++++++++++++++++++++++source demandeurs fin+++++++++++++++++++++++++++++++++++++++++++++++*/

/*+++++++++++++++++++++++++++++++++source traitants +++++++++++++++++++++++++++++++++++++++++++++++*/
getPlaqueImmatriculationAll(){
    return this.http.get(this.api+"plaqueimmatriculation/list")
}
/*+++++++++++++++++++++++++++++++++source traitants fin+++++++++++++++++++++++++++++++++++++++++++++++*/
getDemandevehiculeAllTraitant1(){
    return this.http.get(this.api+"demandevehicule/listTraitant1")
}
getDemandevehiculeAllTraitant2(){
    return this.http.get(this.api+"demandevehicule/listTraitant2")
  }


  totalDemandeEnCour(){
    return this.http.get(this.api+"demandevehicule/totaldemandeencour")
  }
  totalDemandeEnCourAdmin2(){
    return this.http.get(this.api+"demandevehicule/totaldemandeencouradmin")
  }
  totalDemandeTraiter(){
    return this.http.get(this.api+"demandevehicule/totalDemandeTraiter")
  }
  totalDemandeRejeter(){
    return this.http.get(this.api+"demandevehicule/totalDemandeRejeter")
  }
  totaldemandeTransmis(){
    return this.http.get(this.api+"demandevehicule/totaldemandeTransmis")
  }
  
  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  totalEnCoursDemandeur(owner){
    return this.http.get(this.api+"demandevehicule/totalencoursdemandeur/"+owner)
  }
   
  totalEnCoursValidationDemandeur(owner){
    return this.http.get(this.api+"demandevehicule/totalencoursvalidationdemandeur/"+owner)
  }
  
  totalValiderDemandeur(owner){
    return this.http.get(this.api+"demandevehicule/totalvaliderdemandeur/"+owner)
  }

  totalRejetDemandeur(owner){
    return this.http.get(this.api+"demandevehicule/totalrejetdemandeur/"+owner)
  }
   
   
}
