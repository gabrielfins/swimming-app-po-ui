import { Observable, startWith } from 'rxjs';
import { Result } from '../models/result.model';

export function createResult<T>() {
  return new Observable<Result<T>>().pipe(
    startWith({ status: 'pending' } as Result<T>)
  );
}
