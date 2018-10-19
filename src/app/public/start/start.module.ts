import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { StartRoutingModule } from "./start-routing.module";
import { StartPage } from './start.page';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        StartRoutingModule
    ],
    declarations: [
      StartPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StartPageModule { }