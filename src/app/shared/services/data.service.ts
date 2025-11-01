import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, of, shareReplay } from 'rxjs';
import { ClientService } from './client.service';
import { ClubService } from './club.service';
import { ClassService } from './class.service';
import { AssignmentService } from './assignment.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly clubService = inject(ClubService);
  private readonly clientService = inject(ClientService);
  private readonly classService = inject(ClassService);
  private readonly assignmentService = inject(AssignmentService);

  private readonly dataToFetch: { [key: string]: { data: () => Observable<any> } } = {
    clubs: {
      data: () => this.clubService.getAllClubs()
    },
    clients: {
      data: () => this.clientService.getAllClients()
    },
    classes: {
      data: () => this.classService.getAllClasses()
    },
    assignments: {
      data: () => this.assignmentService.getAllAssignments()
    }
  };

  getAllData() {
    const requests: Observable<any>[] = [];

    Object.values(this.dataToFetch).forEach((request) => {
      requests.push(request.data());
    });

    if (requests.length === 0) {
      return of(null);
    }

    return forkJoin(requests).pipe(
      shareReplay(1),
      catchError(() => of(null))
    );
  }
}
