import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  { path: '' ,redirectTo:'createUser',pathMatch: 'full' },
  { path: 'createUser', component: InputFormComponent },
  { path: 'getUsers', component: DataTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
