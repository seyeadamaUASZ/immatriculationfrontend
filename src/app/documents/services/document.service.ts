import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeDocuments } from '../model/TypeDocuments';
import { HttpRequestHelper } from 'src/app/shared/helpers/httprequest.helper';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  api = environment.apii;
  constructor(private http: HttpClient, private reqHelper: HttpRequestHelper) { }

  getDocuments() {
    return this.http.get<any>(this.api + 'document/list', { 'headers': this.reqHelper.getReqOptions("list_document") });
  }
  getDocumentByUser(id) {
    return this.http.get<any>(this.api + 'document/listByUser/'+id, { 'headers': this.reqHelper.getReqOptions("idByUser_document") });
  }
  getDocumentByUserSigner(id) {
    return this.http.get<any>(this.api + 'document/listByUserAsigner/'+id, { 'headers': this.reqHelper.getReqOptions("idByUser_document") });
  }
  getDocumentByUserCertifier(id) {
    return this.http.get<any>(this.api + 'document/listByUserAcertifier/'+id, { 'headers': this.reqHelper.getReqOptions("idByUser_document") });
  }
  getDocumentByUserConsulter(id) {
    return this.http.get<any>(this.api + 'document/listByUserAconsulter/'+id, { 'headers': this.reqHelper.getReqOptions("idByUser_document") });
  }

  getTypeDocuments() {
    return this.http.get<any>(this.api + 'typedocument/list', { 'headers': this.reqHelper.getReqOptions("list_typedocument_document") });
  }

  getTypeDocumentsByProfile(id) {
    return this.http.get<any>(this.api + 'typedocument/profile/'+id, { 'headers': this.reqHelper.getReqOptions("idByprofile_typedocument") });
  }
  addTypeDocument(document: TypeDocuments) {
    return this.http.post<any>(this.api + 'typedocument/create', document, { 'headers': this.reqHelper.getReqOptions("create_typedocument") });
  }
  deleteTypeDoc(document: TypeDocuments) {
    return this.http.post<any>(this.api + 'typedocument/delete', document, { 'headers': this.reqHelper.getReqOptions("delete_typedocument") });
  }
  signerDocument(data,document: Document) {
    return this.http.post<any>(this.api + 'document/signer/'+data, document, { 'headers': this.reqHelper.getReqOptions("delete_typedocument") });
  }

  addDocument(file: any, document: Document,username,statusDocument) {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('document', JSON.stringify(document));
    formData.append('username', username);
    formData.append('statusDocument', statusDocument);
    return this.http.post<any>(this.api + 'document/create', formData, { 'headers': this.reqHelper.getReqOptions("create_document") });
  }


  deleteDocument(id) {
    return this.http.get<any>(this.api + 'documentDelete/'+id, { 'headers': this.reqHelper.getReqOptions("delete_document") });
  }

  updateDocument(file: any, document: Document) {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('document', JSON.stringify(document));
    return this.http.post<any>(this.api + 'document/update', formData, { 'headers': this.reqHelper.getReqOptions("update_document") });

  }

  consulter(id) {
    // let headers = new HttpHeaders();
    return this.http.get(this.api + 'document/' + id,
      {
        // headers: headers,
        observe: 'response',
        responseType: 'arraybuffer',

        'headers': this.reqHelper.getReqOptions("view_document")

      });
  }

}
