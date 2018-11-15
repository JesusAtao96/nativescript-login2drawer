import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import { DrawerService } from "~/app/shared";
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

import {Page} from "ui/page";

@Component({
    moduleId: module.id,
    selector: "ns-sidebar",
    templateUrl: "sidebar.component.html",
    styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private router: Router, private routerExtensions: RouterExtensions, public drawerService: DrawerService, page: Page) {
        // Use the component constructor to inject services.
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this._activatedUrl = "/main/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    ngAfterViewInit() {
        console.log("SidebarComponent ngAfterViewInit");
        this.drawerService.drawer = this.drawerComponent.sideDrawer;
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        
        this.drawerService.toggle();
        /*const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();*/
    }
}