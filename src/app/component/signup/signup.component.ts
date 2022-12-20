import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;

  url='http://localhost:3000/signup'

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']      
    });
  }
// make method to create user 
  signUp(){
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value)
    .subscribe((res)=>{
      alert("Registration successful 0");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    err=>{
      alert("something went wrong !")
    })
  }

}
