import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { data } from '../../data-type';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  addUserMessage: string | undefined;

  loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['',[Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
  })

  constructor(private fb: FormBuilder, private data: DataService ) { }
  
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

  submit(data: data) {
    this.data.addData(data).subscribe((result) => {
      // console.warn(result)
      if (result) {
        this.addUserMessage = 'Your Data is added successfully';
      }
    });

    setTimeout(() => {
      this.addUserMessage = undefined
    }, 3000);

  }

}
