import { NgModule, Optional, SkipSelf } from "@angular/core";
import { NgModel } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    imports:[],
    declarations:[]
})



export class CoreModule {

    constructor(  @Optional() @SkipSelf() core:CoreModule)  {
        if(core) {
            throw new Error("Core Module canonly be import xatoik");
            
        }
    }
      





}