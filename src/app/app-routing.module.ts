import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path:'features',component: FeaturesComponent},
  {path:'features/:id/:username' , component: CardComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', // Add options right here
      }),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
