import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { PublicRoutingngModule } from "./public-routing.module";
import { MaterialModule } from "../shared/material/material";

@NgModule({
declarations:[
    HomeComponent
],
imports:[

    CommonModule,
    PublicRoutingngModule,
    MaterialModule


],
bootstrap:[HomeComponent]
})


export class PublicModule {}