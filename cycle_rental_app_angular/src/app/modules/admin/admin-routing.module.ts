import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostCycleComponent } from './components/post-cycle/post-cycle.component';
import { UpdateCycleComponent } from './components/update-cycle/update-cycle.component';



const routes: Routes = [
  { path: "dashboard", component: AdminDashboardComponent },
  { path: "cycle", component: PostCycleComponent },
  { path: "cycle/:id","component": UpdateCycleComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
