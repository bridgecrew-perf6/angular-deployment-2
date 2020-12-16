import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
textName: string;
  courses:{name:string, price:number, id:number}[];
  selected:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.courses =  [
    {
      id: 1,
      name:  "david",
      price :700
    },
     {
        id: 2,
      name:  "cloud",
      price :400
    },
     {
        id: 3,
      name:  "obi",
      price :200
    }
  ]
  }
  Add():void{
    this.selected = !this.selected
if (this.textName != null && this.textName != "") {

  this.courses.push({name: this.textName , price: this.courses.length * 100, id:this.courses.length + 1})
  console.log("done")
}
  }


  trackCourseById(index, course):number| undefined{
    return course ? course.id : undefined
  }

}
