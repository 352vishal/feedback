import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { CustomerListComponent } from './Components/customer-list/customer-list.component';
import { SubmitComponent } from './Components/submit/submit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerListComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectCountryModule.forRoot('de'),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ provideAnimationsAsync() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
