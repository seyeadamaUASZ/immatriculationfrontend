import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { GenerernumimmatService } from '../../service/generernumimmat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consultVent',
  templateUrl: './consultVent.component.html',
  styleUrls: ['./consultVent.component.scss']
})
export class ConsultVentComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer: ElementRef;
  type: any;
  blob: any;
  fileURL: any
  constructor(public dialogRef: MatDialogRef<ConsultVentComponent>, private generenumate: GenerernumimmatService, @Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
    this.consulterDocumentVente()

  }
  consulterDocumentVente() {
    this.generenumate.consulterVente(this.donnee.id).subscribe(data => {
      this.blob = new Blob([data.body], { type: 'application/pdf' });
      this.fileURL = window.URL.createObjectURL(this.blob);
      this.pdfViewer.nativeElement.data = this.fileURL;
    });

  }
  closeDialog() {
    this.dialogRef.close();
  }

}
