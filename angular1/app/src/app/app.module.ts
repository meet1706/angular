import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PracticeComponent } from './binding/practice/practice.component';
import { CockpitComponent } from './binding/cockpit/cockpit.component';
import { ServerElementComponent } from './binding/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    FormComponent,
    LoginFormComponent,
    BindingComponent,
    DirectivesComponent,
    PracticeComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
