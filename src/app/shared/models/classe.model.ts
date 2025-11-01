export type Classe = {
  classCod: string;
  classTipoClass: string;
  classDescri: string;
  classAbrev: string;
  classIdadMin: string;
  classIdadMax: string;
  classDescAux: string;
  classReveza: string;
  classCliente: string;
};

export type CreateClasseDto = Partial<Classe>;

export type UpdateClasseDto = CreateClasseDto;
