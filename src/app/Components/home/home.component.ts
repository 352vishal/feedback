import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data } from '../../data-type';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private data: DataService,private router: Router ) { }
  
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

  submit(data: Data) {
    this.data.addData(data).subscribe((result) => {
      // console.warn(result)
      if (result) {
        this.addUserMessage = 'Thank you for completing the information';
      }
    });

    setTimeout(() => {
      this.addUserMessage = undefined
      this.router.navigate(['/customer-list'])
    }, 3000);

  }

}
