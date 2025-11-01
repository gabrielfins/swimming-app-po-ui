import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let cpf = control.value;

    if (!cpf) {
      return null;
    }

    cpf = cpf.replace(/\D+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return { invalidCpf: { value: control.value } }; // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    
    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf[9])) {
      return { invalidCpf: { value: control.value } };
    }

    soma = 0;

    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;

    if (resto !== parseInt(cpf[10])) {
      return { invalidCpf: { value: control.value } };
    }

    return null; // CPF válido
  }
}
