import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { SidebarRoutingModule } from "./sidebar-routing.module";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
    bootstrap: [
        SidebarComponent
    ],
    imports: [
        SidebarRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SidebarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SidebarModule { }
