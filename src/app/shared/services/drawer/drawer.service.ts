import { Injectable } from '@angular/core';
import { SideDrawerType } from 'nativescript-ui-sidedrawer/angular';

@Injectable()
export class DrawerService {

    public drawer: SideDrawerType;

    public toggle() {
        if (this.drawer) {
            if(!this.drawer.getIsOpen()) {
                this.drawer.toggleDrawerState();
            } else {
                this.drawer.closeDrawer();
            }
        } else {
            console.log("DrawerService.toggle: this.drawer was undefined");
        }
    }
}