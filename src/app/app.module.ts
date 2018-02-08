import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InjectorComponent } from './components/injector/injector.component';
import { ExampleComponent } from './components/example/example.component';
import { DependencyComponent } from './components/dependency/dependency.component';
import { ChangeComponent } from './components/change/change.component';
import { ProviderComponent } from './components/provider/provider.component';
import { routing } from './app.routing';
import { HighlightJsModule } from 'ngx-highlight-js';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    InjectorComponent,
    ExampleComponent,
    DependencyComponent,
    ChangeComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HighlightJsModule
  ],
  providers: [{ provide : LocationStrategy, useClass : HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
