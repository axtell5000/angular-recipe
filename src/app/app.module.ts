import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.modules';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


// Just a big note when separating your app into more manageable modules.
// 1) Routing can be in different modules, provided it is compiled before links are used
// 2) Slectors must be used in the same module

@NgModule({
  // Here we include Components, Directives, pipes
  // Cant have duplicate entries across different modules under declarations
  declarations: [
    AppComponent
  ],
  // External from angular core modules here
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  // Providers - include putting in our Services, bootstrap - the root module/ Component of App
   bootstrap: [AppComponent]
})
export class AppModule { }
