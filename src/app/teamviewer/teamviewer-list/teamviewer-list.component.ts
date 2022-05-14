import { TeamViewer } from './../shared/teamviewer.model';
import { Component, OnInit } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
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

  async copy(str: string) {
    await navigator.clipboard.writeText(str);
  }

  async aio(teamViewer: TeamViewer) {
    await this.copy(teamViewer.teamViewerID);
    let box: HTMLInputElement = <any>document.getElementById("check-delete-" + teamViewer.hostName);
    box.checked = true;
    window.open("https://inventory.optumserve.com/AssetDetail.aspx?AssetId=" + teamViewer.hwid, "_blank");
    let filterField: HTMLInputElement = <any>document.getElementById("filter-input");
    filterField.disabled = true;
    filterField.title = "Disabled by outstanding deletions";
  }

  async massDelete() {
    if (!confirm("Delete?")) {
      return;
    }
    for (let teamViewer of this.teamViewers) {
      let box: HTMLInputElement = <any>document.getElementById("check-delete-" + teamViewer.hostName);
      if (box != null && box.checked == true) {
        const req = this.teamViewerService.deleteTeamViewer(teamViewer);
        await lastValueFrom(req);
      }
    }
    this.getTeamViewers();
    let filterField: HTMLInputElement = <any>document.getElementById("filter-input");
    filterField.disabled = false;
    filterField.title = "";
  }
}
