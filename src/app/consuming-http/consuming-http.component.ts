import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consuming-http',
  templateUrl: './consuming-http.component.html',
  styleUrls: ['./consuming-http.component.css']
})
export class ConsumingHttpComponent implements OnInit {
posts:requestModel[];

  constructor(private service: PostService) { 

  }

  createPost(input:HTMLInputElement){
    let post:requestModel = {title: input.value, id:null, body:null, userId:null}
      this.posts.unshift(post)
    input.value = ""
this.service.create(post)
.subscribe((response:{id:number}) =>{
  post.id = response.id

},  (error:AppError) =>{
    this.posts.shift()
      if (error instanceof BadInput) {
        alert("Post not created")
       // this.form.setErrors(error.originalError)
      }
    else{
      throw error;
    }
    })
  }

  updatePost(post:requestModel){
    this.service.update(post)
    .subscribe((response) =>{
      console.log(response)
    }
    // ,  (error:AppError) =>{
    //   if (error instanceof NotFoundError) {
    //     alert("Post not found")
    //   }
    // else{
    //       throw error;
    // }
    // }
    )
        // this.http.put(this.url, JSON.stringify(post))
  }
  deletePost(post:requestModel){
   this.service.delete(post.id)
    .subscribe(()=>{
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    }, (error:AppError) =>{
      if (error instanceof NotFoundError) {
        alert("Post already deleted")
      }
    else{
        throw error
    }
    })
  }

  ngOnInit(): void {
    this.service.getAll() 
    .subscribe((response:requestModel[])=> this.posts = response
  //  (error:AppError) =>{
  //     if (error instanceof NotFoundError) {
  //       alert("Post not found")
  //     }
  //   else{
  //       alert("An error occured")
  //   }
  //   }
    // , (error:Response) =>{
    //   alert("An error occured")
    //   console.log(error.status)
    // }
    )
  }

}

export interface requestModel{
userId:number, 
id:number,
 title:string, 
 body:string
}
