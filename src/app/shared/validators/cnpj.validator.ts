import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cnpjValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cnpj = control.value?.replace(/\D/g, '');
  
    if (!cnpj) {
      return null;
    }

    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
      return { invalidCnpj: true };
    }

    const calcCheckDigit = (base: string, weights: number[]) => {
      const sum = base
        .split('')
        .map((n, i) => parseInt(n) * weights[i])
        .reduce((a, b) => a + b, 0);
      const remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const base = cnpj.substring(0, 12);
    const digit1 = calcCheckDigit(base, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    const digit2 = calcCheckDigit(base + digit1, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);

    const valid = cnpj.endsWith(`${digit1}${digit2}`);

    return valid ? null : { invalidCnpj: true };
  };
}
