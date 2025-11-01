import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Classe, CreateClasseDto, UpdateClasseDto } from '../models/classe.model';
import { PatchReturnDto, PostReturnDto } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  http = inject(HttpClient);

  classes$ = new BehaviorSubject<Classe[]>([]);

  readonly baseUrl = `${environment.apiUrl}/classes` as const;

  getAllClasses() {
    const request$ = this.http.get<Classe[]>(this.baseUrl).pipe(shareReplay(1));

    request$.subscribe((classes) => {
      this.classes$.next(classes);
    });

    return request$;
  }

  getClientById(id: string) {
    return this.http.get<Classe>(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }

  createClass(classe: CreateClasseDto) {
    return this.http.post<PostReturnDto<Classe>>(this.baseUrl, classe).pipe(
      shareReplay(1),
    );
  }

  updateClass(id: string, classe: UpdateClasseDto) {
    return this.http.patch<PatchReturnDto<Classe>>(`${this.baseUrl}/${id}`, classe).pipe(
      shareReplay(1),
    );
  }

  deleteClass(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }
}
