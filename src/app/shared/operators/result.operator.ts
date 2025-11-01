import { catchError, Observable, of, startWith, switchMap } from 'rxjs';
import { Result } from '../models/result.model';

export function toResult() {
  return <T>(source: Observable<T>): Observable<Result<T>> => {
    return source.pipe(
      switchMap((data) => of({ status: 'success', data } as Result<T>)),
      startWith({ status: 'loading' } as Result<T>),
      catchError((error) => of({ status: 'error', error } as Result<T>))
    );
  }
}
