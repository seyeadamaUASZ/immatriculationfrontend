import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { GenerernumimmatService } from '../../service/generernumimmat.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  @ViewChild('pdfViewer') pdfViewer: ElementRef;
  type: any;
  blob: any;
  fileURL: any
  constructor(public dialogRef: MatDialogRef<ConsultComponent>, private generenumate: GenerernumimmatService, @Inject(MAT_DIALOG_DATA) public donnee: any) { }

  ngOnInit() {
      this.consulterDocument();
  
  }
  consulterDocument() {
    this.generenumate.consulter(this.donnee.id).subscribe(data => {
      this.blob = new Blob([data.body], { type: 'application/pdf' });
      this.fileURL = window.URL.createObjectURL(this.blob);
      this.pdfViewer.nativeElement.data = this.fileURL;
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
