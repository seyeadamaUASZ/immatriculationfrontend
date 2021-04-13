import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { GenerernumimmatService } from '../../service/generernumimmat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consultAssu',
  templateUrl: './consultAssu.component.html',
  styleUrls: ['./consultAssu.component.scss']
})
export class ConsultAssuComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer: ElementRef;
  type: any;
  blob: any;
  fileURL: any
  constructor(public dialogRef: MatDialogRef<ConsultAssuComponent>, private generenumate: GenerernumimmatService, @Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
 this.consulterDocumentAssurance();

  }



  consulterDocumentAssurance() {
    this.generenumate.consulterAssurance(this.donnee.id).subscribe(data => {
      this.blob = new Blob([data.body], { type: 'application/pdf' });
      this.fileURL = window.URL.createObjectURL(this.blob);
      this.pdfViewer.nativeElement.data = this.fileURL;
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
