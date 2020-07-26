import { Component, Input, Output, Injectable } from '@angular/core';
import { ContactService } from 'src/app/Services/contactService.service';
import { AuthModel } from 'src/app/Models/Auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';
import { Globals } from '../../Globals/Globals';

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: []
})

export class AuthComponent {

    //@Output() outValue = new EventEmitter();

    private authModel = new AuthModel();

    constructor(private contactService: ContactService,
        private router: Router, private globals: Globals) {
    }

    public username = new FormControl("", Validators.required);
    public password = new FormControl("", Validators.required);

    public formFields = new FormGroup({
        username: this.username,
        password: this.password,
    });

    async Authenticate(): Promise<void> {
        if (this.formFields.valid) {
            this.authModel.userName = this.formFields.value.username;
            this.authModel.password = this.formFields.value.password;

            const res = await this.contactService.authenticate(this.authModel)
            this.globals.isAuthenticated = res;
            if (res) {
                this.router.navigate(['accounts/contact']);
                return;
            }
            alert("Authentication failed...");
        }
    }
}
