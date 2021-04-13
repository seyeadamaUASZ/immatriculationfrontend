import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { GenerernumimmatService } from '../../service/generernumimmat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consultAttest',
  templateUrl: './consultAttest.component.html',
  styleUrls: ['./consultAttest.component.scss']
})
export class ConsultAttesttComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer: ElementRef;
  type: any;
  blob: any;
  fileURL: any
  constructor(public dialogRef: MatDialogRef<ConsultAttesttComponent>, private generenumate: GenerernumimmatService, @Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
   this.consulterDocumentAttestation();

  }

  consulterDocumentAttestation() {
    this.generenumate.consulterAttestation(this.donnee.id).subscribe(data => {
      this.blob = new Blob([data.body], { type: 'application/pdf' });
      this.fileURL = window.URL.createObjectURL(this.blob);
      this.pdfViewer.nativeElement.data = this.fileURL;
    });

  }

  
  closeDialog() {
    this.dialogRef.close();
  }

}
