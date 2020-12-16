import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { requestModel } from './../consuming-http/consuming-http.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string, private http:HttpClient) {
   }
      getAll(){
       return  this.http.get(this.url)
            .pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
     catchError(this.handleError)
    );
    
    }
    delete(id:any){
      return this.http.delete(this.url+'/'+ id)
      .pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(this.handleError)
    );
    }
    update(resource:any){
    return   this.http.patch(this.url+'/'+resource.id, JSON.stringify({isRead: true}))
       .pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
     catchError(this.handleError)
    );
    }

    create(resource:any){
    return  this.http.post(this.url, JSON.stringify(resource) )
       .pipe(
      // eg. "map" without a dot before
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
     catchError(this.handleError)
    );
    }

    private handleError(error:Response) {
       if (error.status === 400) {
          return throwError(new BadInput(error))
        }
       if (error.status === 404) {
          return throwError(new NotFoundError())
        }
       return throwError(new AppError(error));
    }
}
