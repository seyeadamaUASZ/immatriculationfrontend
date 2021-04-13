import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlaqueImmatriculation } from '../model/plaqueimmatriculation';@Injectable({
  providedIn: 'root'
})
export class PlaqueImmatriculationService {
api = environment.apii;
  constructor(private http:HttpClient) {  }

  createPlaqueImmatriculation(data){
       return this.http.post(this.api+"plaqueimmatriculation/create",data)
  }
  getPlaqueImmatriculationAll(){
        return this.http.get(this.api+"plaqueimmatriculation/list")
  }
  deletePlaqueImmatriculation(data){
    return this.http.post(this.api+"plaqueimmatriculation/delete",data)
}
}
