import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['',[Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
  })

  constructor(private fb: FormBuilder ) { }
  
  loginUser(){
    console.warn(this.loginForm.value)
  }

  get name() {
    return this.loginForm.controls['name'];
  }
  get email() {
    return this.loginForm.controls['email'];
  }
  get phone() {
    return this.loginForm.controls['phone'];
  }

    ngOnInit(): void {
    }
}
