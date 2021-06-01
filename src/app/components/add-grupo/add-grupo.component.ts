import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-grupo',
  templateUrl: './add-grupo.component.html'
})
export class AddGrupoComponent implements OnInit {
  grupo = {
    name: '',
    descripcion: '',
    video: '',
    published: false
  };
  submitted = false;

  constructor(private grupoService: GrupoService,
              private route: ActivatedRoute,
              private router: Router
                ) { }

  ngOnInit(): void {
  }

  saveGrupo(): void {
    const data = {
      name: this.grupo.name,
      descripcion: this.grupo.descripcion,
      video: this.grupo.video
    };

    this.grupoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGrupo(): void {
    this.submitted = false;
    this.grupo = {
      name: '',
      descripcion: '',
      video: '',
      published: false
    };
  }
  goLista(): void {
    this.router.navigate(['']);
  }

}
