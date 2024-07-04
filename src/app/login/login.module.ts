import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register/register.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../shared/material/material";
import { LoginRoutingModule } from "./login-routing.module";


@NgModule({
    declarations:[LoginComponent, RegisterComponent],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule
        
    ]
})


export class LoginModule {}