import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ConsumingHttpComponent } from './consuming-http/consuming-http.component';
import { AppErrorHandler } from './common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    NewCourseFormComponent,
    FormBuilderComponent,
    ConsumingHttpComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
      // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"", component:HomeComponent
      },
      {
        path:"followers/:id/:username",component:GithubProfileComponent
      },
      {
        path:"followers", component: GithubFollowersComponent
      },
      {
        path:"posts", component:ConsumingHttpComponent
      },
      {
        path:"**", component:NotFoundComponent
      }
    ])
  ],
  providers: [
    PostService,
    {provide:ErrorHandler, useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
