import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import * as appSettings from "application-settings";

@Component({
    selector: "app-start",
    moduleId: module.id,
    templateUrl: "./start.page.html",
	styleUrls: ['./start.page.css']
})
export class StartPage implements OnInit {
    user = {
        email: '',
        password: ''
    };
    processing = false;
    @ViewChild("password") password: ElementRef;

    constructor(private page: Page, private router: Router, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        let myUser = appSettings.getString("user", "") == "" ? appSettings.getString("user", "") : JSON.parse(appSettings.getString("user", ""));
        console.log('myUser login', typeof myUser, myUser);
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }

    login() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        appSettings.setString("user", JSON.stringify(this.user));

        this.processing = true;
        this.routerExtensions.navigate(["/main/home"], { clearHistory: true });
        //this.router.navigate(["/home"]);
    }
}