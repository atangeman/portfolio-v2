import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});