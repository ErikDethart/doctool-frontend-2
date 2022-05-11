import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TeamViewer } from '../shared/teamviewer.model';
import { TeamviewerService } from '../shared/teamviewer.service';

@Component({
  selector: 'app-teamviewer-list',
  templateUrl: './teamviewer-list.component.html',
  styleUrls: ['./teamviewer-list.component.css']
})
export class TeamviewerListComponent implements OnInit {
  teamViewers : TeamViewer[] = [];
  filter: string = "";

  constructor(private teamViewerService : TeamviewerService) { }

  ngOnInit(): void {
    this.getTeamViewers();
    var tableElement = document.getElementById('tvTable');
    if (tableElement != null) {
      tableElement.style.width = document.getElementById('tvTable')?.scrollWidth + 'px';
    }
  }

  getTeamViewers(): void {
    this.teamViewerService.getTeamViewers().subscribe(teamViewers => (this.teamViewers = teamViewers));
  }

  async delete(teamViewer: TeamViewer) {
    if (confirm(`Delete ${teamViewer.hostName}?`)) {
      const req = this.teamViewerService.deleteTeamViewer(teamViewer);
      await lastValueFrom(req);
      this.getTeamViewers();
    }
  }

  copy(str: string) {
    navigator.clipboard.writeText(str);
  }
}
