
import { MaterialModule } from "./material/material";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterTabs } from "./router-tab/router-tabs";
import { RouterTab } from "./router-tab/router-tab";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
    imports:[CommonModule ,MaterialModule, RouterModule],
    declarations:[PageNotFoundComponent, RouterTabs, RouterTab],
    

    exports:[
        CommonModule,
        RouterTabs, 
        RouterTab,
        PageNotFoundComponent,
        
    ]

})

export class SharedModule {}