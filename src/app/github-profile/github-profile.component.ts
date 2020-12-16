import {  combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

 constructor(
     private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    //########################################
combineLatest([
 this.route.paramMap,this.route.queryParamMap
])
.subscribe(combined=>{
 let rrrc= combined[0].get('id')
 let yyyy = combined[1].get('order')
 console.log(rrrc);
 console.log(yyyy)
})
    //###########################################
    const heroId = this.route.snapshot.paramMap.get('username');
       const Id = this.route.snapshot.paramMap.get('id');
     this.route.paramMap.subscribe(param=>{
    const eee =  param.get('username')
    const eee2 =  +param.get('id')
    // console.log(eee)
    //     console.log(eee2)
    })
    // console.log(heroId)
    //  console.log(Id)


      const pheroId = this.route.snapshot.queryParamMap.get('order');
       const pId = this.route.snapshot.queryParamMap.get('page');
     this.route.queryParamMap.subscribe(param=>{
    const peee =  param.get('order')
    const peee2 =  +param.get('page')
    // console.log(peee)
    //     console.log(peee2)
    })
    // console.log(pheroId)
    //  console.log(+pId)
    
  }

  rou(){
   // this.router.navigate(['/heroes', { id: heroId }]);
  // this.router.navigate(['/posts']);
   this.router.navigate(['/followers'],{
     queryParams:{page:10, order:"oldest"}
   });
  }
}
