import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PatchReturnDto, PostReturnDto } from '../models/request.model';
import { Cliente, CreateClienteDto, UpdateClienteDto } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http = inject(HttpClient);

  clients$ = new BehaviorSubject<Cliente[]>([]);

  readonly baseUrl = `${environment.apiUrl}/clientes` as const;

  getAllClients() {
    const request$ = this.http.get<Cliente[]>(this.baseUrl).pipe(shareReplay(1));

    request$.subscribe((clients) => {
      this.clients$.next(clients);
    });

    return request$;
  }

  getClientById(id: string) {
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }

  createClient(client: CreateClienteDto) {
    return this.http.post<PostReturnDto<Cliente>>(this.baseUrl, client).pipe(
      shareReplay(1),
    );
  }

  updateClient(id: string, client: UpdateClienteDto) {
    return this.http.patch<PatchReturnDto<Cliente>>(`${this.baseUrl}/${id}`, client).pipe(
      shareReplay(1),
    );
  }

  deleteClient(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      shareReplay(1),
    );
  }
}
