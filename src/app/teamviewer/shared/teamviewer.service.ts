import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TeamViewer } from './teamviewer.model';

@Injectable({
  providedIn: 'root'
})
export class TeamviewerService {
  teamViewerUrl = "https://localhost:5001/TeamViewer";

  constructor(private http: HttpClient) {
   }

  getTeamViewers(): Observable<TeamViewer[]> {
    return this.http.get<TeamViewer[]>(this.teamViewerUrl);
  }

  deleteTeamViewer(teamViewer: TeamViewer): Observable<unknown> {
    return this.http.delete(`${this.teamViewerUrl}/${teamViewer.hostName}`);
  }
}
