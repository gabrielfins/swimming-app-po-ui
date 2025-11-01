import { Cliente } from './cliente.model';

export type Clube = {
  clubCodigo: string;
  clubSigla: string;
  clubSiglaCbda: string;
  clubNomeAbrev: string;
  clubRazaoSocial: string;
  clubTpFiliacao: string;
  clubLogradouro: string;
  clubBairro: string;
  clubCidade: string;
  clubUf: string;
  clubCep: string;
  clubTelefone1: string;
  clubTelefone2: string;
  clubEmail: string;
  clubSite: string;
  clubPresidente: string;
  clubDiretor: string;
  clubPisc25: 'S' | 'N';
  clubPisc50: 'S' | 'N';
  clubConverte: string;
  clubPiscAquec: string;
  clubQtdeRaia: string;
  clubDtFundacao: string;
  clubDtFiliacao: string;
  clubFgInterior: 'S' | 'N';
  clubCliente: string;
  cliente: Cliente | null;
};

export type CreateClubeDto = Partial<Clube>;

export type UpdateClubeDto = CreateClubeDto;
