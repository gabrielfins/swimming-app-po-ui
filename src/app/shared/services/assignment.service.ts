import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CreateProvaDto, Prova, UpdateProvaDto } from '../models/prova.model';
import { PatchReturnDto, PostReturnDto } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  http = inject(HttpClient);
  
  assignments$ = new BehaviorSubject<Prova[]>([]);

  readonly baseUrl = `${environment.apiUrl}/provas` as const;

  getAllAssignments() {
    const request$ = this.http.get<Prova[]>(this.baseUrl).pipe(shareReplay(1));

    request$.subscribe((assignments) => {
      this.assignments$.next(assignments);
    });

    return request$;
  }

  getClientById(id: string) {
    return this.http.get<Prova>(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }

  createAssignment(assigment: CreateProvaDto) {
    return this.http.post<PostReturnDto<Prova>>(this.baseUrl, assigment).pipe(
      shareReplay(1),
    );
  }

  updateAssignment(id: string, assignment: UpdateProvaDto) {
    return this.http.patch<PatchReturnDto<Prova>>(`${this.baseUrl}/${id}`, assignment).pipe(
      shareReplay(1),
    );
  }

  deleteAssignment(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }
}
