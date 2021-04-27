import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/compiler";

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "services", component: ServicesComponent},
      {path: "projects", component: ProjectsComponent},
      {path: "contact", component: ContactComponent},
      {path: "about", component: AboutComponent},
      {path: "blog", component: BlogComponent},
      {path: "login", component: LoginComponent},
      {path: "signup", component: SignupComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
