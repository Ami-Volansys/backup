import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes} from '@angular/router';
import { ProductComponent } from './navbar/product/product.component';
import { MembersComponent } from './navbar/members/members.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent,
    ForgotPasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'signup',
        component:MembersComponent 
      },
      {
        path:'login',
        component: ProductComponent 
      },
      {
        path:'forgotpassword',
        component:ForgotPasswordComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
