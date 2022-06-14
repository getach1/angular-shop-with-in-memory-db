import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static whitSpace(control: AbstractControl): ValidationErrors | null {
        return control.value.trim() === '' ? { 'whiteSpace': true } : null;
    }

    static phone(control: AbstractControl): ValidationErrors | null {
        const value: string = control.value.trim();
        // return value.match('/^(09|\+2519)\d{9}$/') ? null : { 'phone': true };
        return value.match('^(\\+2519)[0-9]{8}$') || value.match('^(09)[0-9]{8}$') ? null : { 'phone': true };
    }
}