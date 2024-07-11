import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { UserRouterAccessGuard } from './core/user-router-access.guard';

const routes: Routes = [

  {
    path:'',
    loadChildren: () =>
      import('./public/public.module').then((m) =>m.PublicModule)


  },


  {
    path:'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) =>m.AdminModule , ),
     canActivate:[UserRouterAccessGuard]


  },


  {
    path:'',
    loadChildren: () =>
      import('./login/login.module').then((m) =>m.LoginModule)


  },


  
   
  

  {path:"**" , component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
