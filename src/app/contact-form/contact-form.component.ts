import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
contactMethods:{id:number, name:string}[]=[
  {id:1, name:"Email"},
  {id:2, name:"Phone"}
]

  constructor() { }

  ngOnInit(): void {
  }
  log(x):void{
    console.log(x)
  }
submit(f){
  console.log(f.value)
}
}
