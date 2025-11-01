import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { Atleta, CreateAtletaDto, UpdateAtletaDto } from '../models/atleta.model';
import { environment } from '../../../environments/environment';
import { PatchReturnDto, PostReturnDto } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  http = inject(HttpClient);
  
  athletes$ = new BehaviorSubject<Atleta[]>([]);

  readonly baseUrl = `${environment.apiUrl}/atletas` as const;

  getAllAthletes() {
    const request$ = this.http.get<Atleta[]>(this.baseUrl).pipe(shareReplay(1));

    request$.subscribe((athletes) => {
      this.athletes$.next(athletes);
    });

    return request$;
  }

  getClientById(id: string) {
    return this.http.get<Atleta>(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }

  createAthlete(athlete: CreateAtletaDto) {
    return this.http.post<PostReturnDto<Atleta>>(this.baseUrl, athlete).pipe(
      shareReplay(1),
    );
  }

  updateAthlete(id: string, athlete: UpdateAtletaDto) {
    return this.http.patch<PatchReturnDto<Atleta>>(`${this.baseUrl}/${id}`, athlete).pipe(
      shareReplay(1),
    );
  }

  deleteAthlete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }
}
