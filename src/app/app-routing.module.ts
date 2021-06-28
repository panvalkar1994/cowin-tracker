import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoDistrictsComponent } from './co-districts/co-districts.component';
import { CoStatesComponent } from './co-states/co-states.component';

const routes: Routes = [
  {path:'states', component:CoStatesComponent},
  {path:'districts', component:CoDistrictsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routsComponent = [CoStatesComponent,CoDistrictsComponent];
