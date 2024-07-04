import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes:Routes = [

    
      {  path:'' , redirectTo:'/home', pathMatch:'full'},
      {path:'home' , component:HomeComponent}
    

];


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class PublicRoutingngModule {}