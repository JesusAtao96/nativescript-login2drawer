import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/start", pathMatch: "full" },
    { path: 'start', loadChildren: '~/app/public/start/start.module#StartPageModule' },
    { path: 'main', loadChildren: '~/app/pages/menu/menu.module#MenuModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
