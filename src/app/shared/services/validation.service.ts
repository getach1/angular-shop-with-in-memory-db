import { AbstractControl } from "@angular/forms";

export class ValidationService {
    static getErrorMessage(control: AbstractControl): string {
        const errors = control.errors;

        if (!!!errors) {
            return '';
        }
        if (errors['required']) {
            return 'Please fill this field';
        }
        if (errors['pattern']) {
            return 'Should contain only letters';
        }
        if (errors['minlength']) {
            return `Should be ${errors['minlength']['requiredLength']} letters minimum`;
        }
        if (errors['maxlength']) {
            return `Should be ${errors['maxlength']['requiredLength']} letters maximum`;
        }
        if (errors['min']) {
            return `Should be ${errors['min']['min']} or more`;
        }
        if (errors['max']) {
            return `Should be ${errors['max']['max']} or less`;
        }
        if (errors['email']) {
            return 'Please enter a valid email';
        }
        if (errors['phone']) {
            return 'Please enter a valid phone';
        }
        if (errors['whiteSpace']) {
            return 'White space not allowed';
        }
        return '';
    }
}