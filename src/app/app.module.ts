import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { SelectService } from "./shared/search.service";
import { SearchComponent } from './user/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar:true

    }
      
    )
  ],
  providers: [UserService,SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
