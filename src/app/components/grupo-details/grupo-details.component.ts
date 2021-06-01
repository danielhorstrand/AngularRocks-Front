import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grupo-details',
  templateUrl: './grupo-details.component.html'
})
export class GrupoDetailsComponent implements OnInit {
  currentGrupo = null;
  message = '';

  constructor(
    private grupoService: GrupoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.grupoService.get(id)
      .subscribe(
        data => {
          this.currentGrupo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      name: this.currentGrupo.name,
      descripcion: this.currentGrupo.descripcion,
      video: this.currentGrupo.video,
      published: status
    };

    this.grupoService.update(this.currentGrupo.id, data)
      .subscribe(
        response => {
          this.currentGrupo.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateGrupo(): void {
    this.grupoService.update(this.currentGrupo.id, this.currentGrupo)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Grupo cambiado con exito!';
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
        });
  }

  deleteGrupo(): void {
    this.grupoService.delete(this.currentGrupo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['']);
        },
        error => {
          console.log(error);
        });
  }
}
