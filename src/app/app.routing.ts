import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './components/provider/provider.component';
import { InjectorComponent } from './components/injector/injector.component';
import { ChangeComponent } from './components/change/change.component';
import { ExampleComponent } from './components/example/example.component';
import { DependencyComponent } from './components/dependency/dependency.component';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
    { path : '', component : HomeComponent },
    { path : 'provider', component : ProviderComponent },
    { path : 'injector', component : InjectorComponent },
    { path : 'change', component : ChangeComponent },
    { path : 'dependency', component : DependencyComponent },
    { path : 'example', component : ExampleComponent }
];

export const routing = RouterModule.forRoot(routes);