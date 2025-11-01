export type PostReturnDto<T> = T & {
  createdAt: string;
  modifiedAt: string;
  deletedAt: string | null;
};

export type PatchReturnDto<T> = PostReturnDto<T>;
