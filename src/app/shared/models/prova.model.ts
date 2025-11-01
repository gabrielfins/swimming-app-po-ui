export type Prova = {
  provCodigo: string;
  provDescri: string;
  provReveza: 'S' | 'N';
};

export type CreateProvaDto = Partial<Prova>;

export type UpdateProvaDto = CreateProvaDto;
