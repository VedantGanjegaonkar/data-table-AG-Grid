import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormBuilder
} from '@angular/forms';
import { ageValidator } from '../validator/age.validator';
import { verifyPassword } from '../validator/confirm.password.validator';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
  constructor(private services:ServicesService,private fb:FormBuilder,private router:Router){

  }
  title = 'Profile Info';
  hobby: string[] = ['Dancing', ' Singing', 'Reading', 'Travelling'];
  statesAndCities: {
    [state: string]: string[];
  } = {
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur'],
    Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  };
  states = Object.keys(this.statesAndCities);
  cities: string[] = [];
  profileForm = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z ]+$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/),
    ]),
    // hobbies:this.formBuilder.array([])
    gender: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required, ageValidator(18)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[6-9]([0-9]{9})$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/
      ),
    ]),
    confirmPassword: new FormControl('', [Validators.required, verifyPassword]),
    hobbies:new FormArray([],[Validators.required])
  });
 
  submitForm() {
    if (this.profileForm.valid) {
    
    console.log(this.profileForm.value);
    
  this.services.postData(this.profileForm.value).subscribe(
    response=>{
      // this.router.navigate(['/sibling2'])
      console.log('Server response:', response);
      this.router.navigate(['getUsers'])
      this.profileForm.reset(); 
      const inputCheckbox=document.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
      inputCheckbox.forEach((checkbox)=>{
       checkbox.checked=false
      })
    },
    error => {
      console.error('Error occurred:', error);
    })
    
  
   const fetchHobby=this.profileForm.get('hobbies') as FormArray;
   fetchHobby.clear()
    }
  }
  get name() {
    // console.log(this.name)
    return this.profileForm.get('name');
  }
  get email() {
    // console.log(this.email)
    return this.profileForm.get('email');
  }
  get gender() {
    return this.profileForm.get('gender');
  }
  get state() {
    return this.profileForm.get('state');
  }
  get updatedcity() {
    this.profileForm.get('state')?.valueChanges.subscribe(() => {
      this.profileForm.get('city')?.setValue('');
    });
    const selectedState = this.profileForm.get('state')?.value;
    if (selectedState) {
      // this.profileForm.get('city')?.setValue('')
      this.cities = this.statesAndCities[selectedState] || [];
    } else {
      this.cities = [];
    }
    return this.cities;
  }
  get city() {
    return this.profileForm.get('city');
  }
  get dob() {
    return this.profileForm.get('dob');
  }
  get phone() {
    return this.profileForm.get('phone');
  }
  get password() {
    return this.profileForm.get('password');
  }
  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }
  // cityValidator(control: AbstractControl): ValidationErrors | null {
  //   const cityValue = control.value as string;
  //   if (cityValue.trim===null) { 
  //     console.log(cityValue)
  //     return { required: true };  
  //   }
  //   return null;
  // }
  onChange(e:any){
    const checkedValue=e.target.value;
    const checked=e.target.checked;
    const checkedArray=this.profileForm.get('hobbies') as FormArray
    // console.log(checkedValue)
    // console.log(checked)
    if(checked){
      checkedArray.push(new FormControl(checkedValue))
    }
    else{
      let i:number=0;
      checkedArray.controls.forEach((item)=>{
        if(item.value==checkedValue){
          checkedArray.removeAt(i);
        }
        i++
      })
    }
  }

}
