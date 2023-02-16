import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routermedico',
  templateUrl: './routermedico.component.html',
  styleUrls: ['./routermedico.component.css'],
})
export class RoutermedicoComponent implements OnInit {
  public id!: string;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  public guardarMedico(): void {
    this.router.navigate(['medico', '123']);
  }
}
