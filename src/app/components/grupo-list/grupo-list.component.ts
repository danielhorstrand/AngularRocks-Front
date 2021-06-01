import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html'
})
export class GrupoListComponent implements OnInit {

  grupos: any;
  currentGrupo = null;
  currentIndex = -1;
  name = '';
  video: string;

  constructor(private grupoService: GrupoService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.retrieveGrupos();
  }

  retrieveGrupos(): void {
    this.grupoService.getAll()
      .subscribe(
        data => {
          this.grupos = data;
          this.video = this.grupos.video;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getVideoIframe(url) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

  refreshList(): void {
    this.retrieveGrupos();
    this.currentGrupo = null;
    this.currentIndex = -1;
  }

  setActiveGrupo(grupo, index): void {
    this.currentGrupo = grupo;
    this.currentIndex = index;
  }

  removeAllGrupos(): void {
    this.grupoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.grupoService.findByName(this.name)
      .subscribe(
        data => {
          this.grupos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
