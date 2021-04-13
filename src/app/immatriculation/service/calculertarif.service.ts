import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Calculertarif } from '../model/calculertarif';
@Injectable({
  providedIn: 'root'
})
export class CalculertarifService {
api = environment.apii;
  constructor(private http:HttpClient) {  }

  createCalculertarif(data){
       return this.http.post(this.api+"calculertarif/create",data)
  }
  getCalculertarifAll(owner){
        return this.http.get(this.api+"calculertarif/list/"+owner)
  }
  deleteCalculertarif(data){
    return this.http.post(this.api+"calculertarif/delete",data)
}
  getTask(poowner){
    return this.http.get(this.api+"calculertarif/task/"+poowner)
 }
 getStatus(taskId){
  return this.http.get(this.api+"transition/statusAfterExecution/"+taskId)
 }
updateTaskCalculertarif(id,status){
  return this.http.get(this.api+"demandevehicule/status/"+id+"/"+status)
}

getAllTask(){
  return this.http.get(this.api+"task/list")
}}
