import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function camelCaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const isCamelCase = /^[a-z][A-Za-z]*$/.test(value);

    return !isCamelCase ? { camelCase: true } : null;
  };
}
