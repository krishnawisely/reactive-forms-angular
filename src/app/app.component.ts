import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RectiveFormsProject';
  submitted: boolean;
  userForm: FormGroup;
  constructor(private fb: FormBuilder){
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        age: [18]
      });
      this.submitted=false;
  }

  ngOnInit(): void {
  }

  saveUser(userFormObj: FormGroup): void{
    this.submitted=true;
    let name = userFormObj.value.name;
    console.log('name->',name);
    
  }

  get f() { return this.userForm.controls; }
}
