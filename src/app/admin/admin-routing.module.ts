import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { UserComponent } from "./entity/user/user.component";

const routes:Routes = [
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'',
                redirectTo:'dars'
            },

            {
                path:'user',
                component:UserComponent,
                // canActivate:[]

            },


            // pathlar
            
        ]
    }



]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class AdminRoutingModule {}