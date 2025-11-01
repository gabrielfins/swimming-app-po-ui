import { Clube } from './clube.model';

export type Atleta = {
  atleRegistro: string;
  atleDtRegistro?: string;
  clubCodigo?: string;
  clube?: Clube;
  atleFgSituacao?: string;
  atleNome?: string;
  atleDtNasc: string;
  atleSexo: string;
  atleDataExame?: string;
  atleNomePai?: string;
  atleNomeMae?: string;
  atleLogradouro?: string;
  atleNumero?: string;
  atleComplemento?: string;
  atleBairro?: string;
  atleCidade?: string;
  atleUf?: string;
  atleCep?: string;
  atleTelefone1?: string;
  atleTelefone2?: string;
  atleEmail?: string;
  atleIdentidade?: string;
  atleCpf?: string;
  atleConfedera?: string;
  atleFedera?: string;
  atleID?: string;
  atlePNE?: string;
  atleTipo?: string;
  atleCodnome?: string;
  atleSenha?: string;
  atleCliente?: string;
  atlePatroc?: string;
  atleClasse?: string;
  atleRecno?: string;
  atlePercente?: string;
  atleFgArbitro?: string;
}

export type CreateAtletaDto = Partial<Atleta>;

export type UpdateAtletaDto = CreateAtletaDto;

