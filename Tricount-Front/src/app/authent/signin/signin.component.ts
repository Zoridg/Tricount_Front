import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  validationMessage: string;
  user: User;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    return this.httpClient.get('');
  }
}
