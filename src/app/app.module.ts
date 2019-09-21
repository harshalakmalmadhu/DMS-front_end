import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from "@angular/material";
import { MatButtonModule} from "@angular/material";
import { MatIconModule } from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { SelectService } from "./shared/search.service";
import { SearchComponent } from './user/search/search.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    
    ToastrModule.forRoot({
      progressBar:true

    }
      
    ),
    
    BsDatepickerModule.forRoot()
  ],
  providers: [UserService,SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
