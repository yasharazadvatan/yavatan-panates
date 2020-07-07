import { Route } from '@angular/compiler/src/core';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component'; 
import { FeaturesComponent } from './features/features.component'; 
import { PricingComponent } from './pricing/pricing.component'; 
import { ContactUsComponent } from './contactUs/contactUs.component'; 

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'about', component: AboutComponent},
            { path: 'features', component: FeaturesComponent },
            { path: 'pricing', component: PricingComponent },
            { path: 'contactus', component: ContactUsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
