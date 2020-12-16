import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

//   form = new FormGroup({
//     name: new FormControl('', Validators.required),
//     contact : new FormGroup({
//       email: new FormControl(),
//       phone: new FormControl()
//     }),
//   topics:  new FormArray([])
// })
form: FormGroup;
  constructor(fb: FormBuilder) {
   this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email : [],
        phone: []
      }),
      topics: fb.array([])
    })
   }

  ngOnInit(): void {
  }

}
