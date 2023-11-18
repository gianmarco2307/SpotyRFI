import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TratteComponent } from './components/tratte/tratte.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "tratte", component: TratteComponent },
  { path: "chisiamo", component: ChisiamoComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
