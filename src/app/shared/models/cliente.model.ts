export type Cliente = {
  cliCodigo: string;
  cliNome: string;
  cliJpeg: string;
  cliAtivo: 'S' | 'N';
};

export type CreateClienteDto = Partial<Cliente>;

export type UpdateClienteDto = CreateClienteDto;
