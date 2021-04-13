import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Demandevehicule } from '../model/demandevehicule';
@Injectable({
  providedIn: 'root'
})
export class DemandevehiculeService {
api = environment.apii;
  constructor(private http:HttpClient) {  }

  createDemandevehicule(data:any){
      const formData = new FormData()
      Object.keys(data).map((key)=>{
        formData.append(key,data[key])
      });
      return this.http.post(this.api+"demandevehicule/create",formData)
  }
  getDemandevehiculeAll(owner){
        return this.http.get(this.api+"demandevehicule/list/"+owner)
  }

  getDemandevehiculeAllTraitant1(){
    return this.http.get(this.api+"demandevehicule/listTraitant1")
}

getDemandevehiculeAllTraitant2(){
  return this.http.get(this.api+"demandevehicule/listTraitant2")
}
  getDemandevehiculeByNumeroImmat(numeroimmat){
    return this.http.get(this.api+"demandevehicule/oldvehicule/"+numeroimmat)
}
getDemandevehiculeByid(id){
  return this.http.get(this.api+"demandevehicule/"+id)
}
  findAllDemandes(){
    return this.http.get(this.api+"demandevehicule/list")
}
findAllDemandesAutoComplete(){
  return this.http.get(this.api+"demandevehicule/listautocomplet")
}
  deleteDemandevehicule(data){
    return this.http.post(this.api+"demandevehicule/delete",data)
}
  getTask(poowner){
    return this.http.get(this.api+"demandevehicule/task/"+poowner)
 }
 getStatus(taskId){
  return this.http.get(this.api+"transition/statusAfterExecution/"+taskId)
 }
updateTaskDemandevehicule(id,status){
  return this.http.get(this.api+"demandevehicule/status/"+id+"/"+status)
}

getAllTask(){
  return this.http.get(this.api+"task/list")
}

 
getUserbyId(id:any) {
  return this.http.get(this.api+"getuserbyid/"+id)
}



}


