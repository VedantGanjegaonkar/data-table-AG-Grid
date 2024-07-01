import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function ageValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null; // If no value, don't return an error. Required validation should handle this.
        }

        const birthdate = new Date(value);
        const today = new Date();

        if (isNaN(birthdate.getTime())) {
            return { ageInvalid: { valid: false, minAge: minAge } };
        }

        let age = today.getTime() - birthdate.getTime();
        age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

        if (age < minAge) {
            return { ageInvalid: { valid: false, minAge: minAge } };
        }

        return null;
    };
}