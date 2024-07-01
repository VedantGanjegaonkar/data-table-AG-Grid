import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const verifyPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.root.get('password');
    const confirmPassword = control.value;

    if (!passwordControl || !confirmPassword) {
        return null;
    }

    if (confirmPassword !== passwordControl.value) {
        return { mismatch: true };
    }

    return null;
};
