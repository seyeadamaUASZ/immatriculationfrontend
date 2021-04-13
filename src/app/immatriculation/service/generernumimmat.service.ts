import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Generernumimmat } from '../model/generernumimmat';
@Injectable({
  providedIn: 'root'
})
export class GenerernumimmatService {
api = environment.apii;
  constructor(private http:HttpClient) {  }

  getDemandevehiculeByid(id){
    return this.http.get(this.api+"demandevehicule/"+id)
  }

  createGenerernumimmat(data){
       return this.http.post(this.api+"generernumimmat/create",data)
  }
  getGenerernumimmatAll(owner){
        return this.http.get(this.api+"generernumimmat/list/"+owner)
  }
  deleteGenerernumimmat(data){
    return this.http.post(this.api+"generernumimmat/delete",data)
}
  getTask(poowner){
    return this.http.get(this.api+"generernumimmat/task/"+poowner)
 }
 getStatus(taskId){
  return this.http.get(this.api+"transition/statusAfterExecution/"+taskId)
 }
updateTaskGenerernumimmat(id,status,immat){
  return this.http.get(this.api+"demandevehicule/status/"+id+"/"+status+"/"+immat)
}
updateTaskGenerernumimmatMotif(id,status,immat,motif){
  return this.http.get(this.api+"demandevehicule/status/motif/"+id+"/"+status+"/"+immat+"/"+motif)
}

getAllTask(){
  return this.http.get(this.api+"task/list")
}

sendNotifcation(email){
  return this.http.get(this.api+"demandevehicule/notification/"+email)
 }

 sendNotifcationForPaid(email){
  return this.http.get(this.api+"demandevehicule/notificationpourpaiement/"+email)
 }

 consulter(id) {
  // let headers = new HttpHeaders();
  return this.http.get(this.api + 'consultation/' + id,
    {
      // headers: headers,
      observe: 'response',
      responseType: 'arraybuffer',

    });
}


consulterCerticat(id) {
  // let headers = new HttpHeaders();
  return this.http.get(this.api + 'consultationCerticat/' + id,
    {
      // headers: headers,
      observe: 'response',
      responseType: 'arraybuffer',

    });
}
consulterAttestation(id) {
  // let headers = new HttpHeaders();
  return this.http.get(this.api + 'consultationAttestation/' + id,
    {
      // headers: headers,
      observe: 'response',
      responseType: 'arraybuffer',

    });
}
consulterVente(id) {
  // let headers = new HttpHeaders();
  return this.http.get(this.api + 'consultationvente/' + id,
    {
      // headers: headers,
      observe: 'response',
      responseType: 'arraybuffer',

    });
}
consulterAssurance(id) {
  // let headers = new HttpHeaders();
  return this.http.get(this.api + 'consultationassurance/' + id,
    {
      // headers: headers,
      observe: 'response',
      responseType: 'arraybuffer',

    });
}

}
