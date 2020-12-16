import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(
     private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.queryParamMap.get('order');
    console.log(heroId)
  }

  rou(){
   // this.router.navigate(['/heroes', { id: heroId }]);
   this.router.navigate(['/followers'],{
     queryParams:{page:10, order:"oldest"}
   });
  }

}
