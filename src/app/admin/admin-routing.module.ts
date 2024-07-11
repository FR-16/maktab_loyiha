import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { UserComponent } from "./entity/user/user.component";
import { UserRouterAccessGuard } from "../core/user-router-access.guard";
import { Lavozim } from "../shared/model.ts/lavozim";
import { DarsComponent } from "./entity/dars/dars.component";

const routes:Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'',
                redirectTo:"dars"
            },

            {
                path:'user',
                component:UserComponent,
              canActivate:[UserRouterAccessGuard],
              data:{
                authorities:[Lavozim.ADMIN,Lavozim.MANAGER]

              }
                
               

            },

             {path:"dars", component:DarsComponent }
            
        ]
    }



]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class AdminRoutingModule {}