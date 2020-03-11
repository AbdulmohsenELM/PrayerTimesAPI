import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveapiComponent } from './retrieveapi/retrieveapi.component';


const routes: Routes = [{path: 'api', component: RetrieveapiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
