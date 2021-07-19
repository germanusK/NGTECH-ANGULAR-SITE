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
import { FormsModule } from '@angular/forms';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersHomeComponent } from './components/users-home/users-home.component';
// import { GenericUserComponent } from './components/users-home/generic-user/generic-user.component';
import { AddServiceComponent } from './components/users-home/generic-user/services/add-service/add-service.component';
import { GetServicesComponent } from './components/users-home/generic-user/services/get-services/get-services.component';
import { UpdateServiceComponent } from './components/users-home/generic-user/services/update-service/update-service.component';
import { UserDefaultComponent } from './components/users-home/generic-user/user-default/user-default.component';
import { NewProductComponent } from './components/users-home/generic-user/products/new-product/new-product.component';
import { UpdateProductComponent } from './components/users-home/generic-user/products/update-product/update-product.component';
import { GetProductsComponent } from './components/users-home/generic-user/products/get-products/get-products.component';
import { ProductDetailsComponent } from './components/users-home/generic-user/products/product-details/product-details.component';
import { ServiceDetailsComponent } from './components/users-home/generic-user/services/service-details/service-details.component';
import { NewPostComponent } from './components/users-home/generic-user/blog/new-post/new-post.component';
import { UpdatePostComponent } from './components/users-home/generic-user/blog/update-post/update-post.component';
import { PostDetailsComponent } from './components/users-home/generic-user/blog/post-details/post-details.component';
import { GetBlogComponent } from './components/users-home/generic-user/blog/get-blog/get-blog.component';
import { NewContactComponent } from './components/users-home/generic-user/contact/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/users-home/generic-user/contact/update-contact/update-contact.component';
import { GetContactsComponent } from './components/users-home/generic-user/contact/get-contacts/get-contacts.component';
import { GetAboutComponent } from './components/users-home/generic-user/about/get-about/get-about.component';
import { NewAboutComponent } from './components/users-home/generic-user/about/new-about/new-about.component';
import { UpdateAboutComponent } from './components/users-home/generic-user/about/update-about/update-about.component';
import { DetailsAboutComponent } from './components/users-home/generic-user/about/details-about/details-about.component';

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
    SignupComponent,
    UsersHomeComponent,
    // GenericUserComponent,
    AddServiceComponent,
    GetServicesComponent,
    UpdateServiceComponent,
    UserDefaultComponent,
    NewProductComponent,
    UpdateProductComponent,
    GetProductsComponent,
    ProductDetailsComponent,
    ServiceDetailsComponent,
    NewPostComponent,
    UpdatePostComponent,
    PostDetailsComponent,
    GetBlogComponent,
    NewContactComponent,
    UpdateContactComponent,
    GetContactsComponent,
    GetAboutComponent,
    NewAboutComponent,
    UpdateAboutComponent,
    DetailsAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "home", component: HomeComponent},
      {path: "services", component: ServicesComponent},
      {path: "projects", component: ProjectsComponent},
      {path: "contact", component: ContactComponent},
      {path: "about", component: AboutComponent},
      {path: "blog", component: BlogComponent},
      {path: "login", component: LoginComponent},
      {path: "signup", component: SignupComponent},
      {
        path: "users", 
        component: UsersHomeComponent,
        children: [
          {path: "", component: UserDefaultComponent},
          {path: "userHome", component: UserDefaultComponent},
          // service related routes
          {path: "newService", component: AddServiceComponent},
          {path: "updateService", component: UpdateServiceComponent},
          {path: "serviceList", component: GetServicesComponent},
          {path: "serviceDetails", component: ServiceDetailsComponent},
          // product related routes
          {path: "newProduct", component: NewProductComponent},
          {path: "updateProduct", component: UpdateProductComponent},
          {path: "productList", component: GetProductsComponent},
          {path: "productDetails", component: ProductDetailsComponent},
          // blog related routes
          {path: "newPost", component: NewPostComponent},
          {path: "updatePost", component: UpdatePostComponent},
          {path: "postList", component: GetBlogComponent},
          {path: "postDetails", component: PostDetailsComponent},
          // contact routes
          {path: "newContact", component: NewContactComponent},
          {path: "updateContact", component: UpdateContactComponent},
          {path: "contactList", component: GetContactsComponent},
          // about routes
          {path: "newAbout", component: NewAboutComponent},
          {path: "updateAbout", component: UpdateAboutComponent},
          {path: "aboutDetails", component: DetailsAboutComponent},
          {path: "aboutList", component: GetAboutComponent}
        ]
      },
      // {
      //   path: "genericUser/:user", component: GenericUserComponent,
      // }
    ])
  ],
  providers: [
    MainService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

