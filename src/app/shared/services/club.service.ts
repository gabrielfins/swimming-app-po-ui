import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Clube, CreateClubeDto, UpdateClubeDto } from '../models/clube.model';
import { PatchReturnDto, PostReturnDto } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  http = inject(HttpClient);

  clubs$ = new BehaviorSubject<Clube[]>([]);

  readonly baseUrl = `${environment.apiUrl}/clubes` as const;

  getAllClubs() {
    const request$ = this.http.get<Clube[]>(this.baseUrl).pipe(shareReplay(1));

    request$.subscribe((clubs) => {
      this.clubs$.next(clubs);
    });

    return request$;
  }

  getClubById(id: string) {
    return this.http.get<Clube>(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1)
    );
  }

  createClub(club: CreateClubeDto) {
    return this.http.post<PostReturnDto<Clube>>(this.baseUrl, club).pipe(
      shareReplay(1)
    );
  }

  updateClub(id: string, club: UpdateClubeDto) {
    return this.http.patch<PatchReturnDto<Clube>>(`${this.baseUrl}/${id}`, club).pipe(
      shareReplay(1)
    );
  }

  deleteClub(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1)
    );
  }
}
