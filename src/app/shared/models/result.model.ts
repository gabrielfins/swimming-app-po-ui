import { HttpErrorResponse } from '@angular/common/http';

export type Result<TData, TError = HttpErrorResponse> = {
  status: 'pending';
  data?: never;
  error?: never;
} | {
  status: 'loading';
  data?: never;
  error?: never;
} | {
  status: 'success';
  data: TData;
  error?: never;
} | {
  status: 'error';
  data?: never;
  error: TError;
};
