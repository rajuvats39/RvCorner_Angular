import { FormControl, FormGroup } from "@angular/forms";

export default class FormValidators {
    static validateEmail(email: string): boolean {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    static validateFormFields(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateFormFields(control);
            }
        });
    }

    static validatePassword(password: string): boolean {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    }

    static validateRequired(value: string): boolean {
        return value.trim().length > 0;
    }

    static validateUsername(username: string): boolean {
        const usernamePattern = /^[a-zA-Z0-9._-]{3,}$/;
        return usernamePattern.test(username);
    }

}