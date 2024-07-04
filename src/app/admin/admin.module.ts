import { NgModule } from "@angular/core";
import { DarsComponent } from './entity/dars/dars.component';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../shared/material/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";
import { UserComponent } from './entity/user/user.component';

@NgModule({
    declarations:[
        
     SidenavComponent,
    DarsComponent,
    LayoutComponent,
    HeaderComponent,
    
  ],

  imports:[
    CommonModule,
     MaterialModule,
     FormsModule,
     ReactiveFormsModule,
     AdminRoutingModule
  ]
})



export class AdminModule {}