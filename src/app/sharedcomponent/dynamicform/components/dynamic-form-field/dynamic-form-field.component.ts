import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FieldBase }     from '../../models/field-base';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
