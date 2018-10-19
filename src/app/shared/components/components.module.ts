import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MainActionBarComponent } from './action-bar/actionbar.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    exports: [
        MainActionBarComponent
    ],
    declarations: [
        MainActionBarComponent
    ]
})
export class ComponentsSharedModule { }
