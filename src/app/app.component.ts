import { Persona } from './persona';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Persona = new Persona(0, '', 0);
  lst: Array<Persona> = [];
  constructor() {

  }

  ngOnInit(): void {
    this.lst = [new Persona(1, 'juan', 22), new Persona(2, 'rosa', 18), new Persona(3, 'Alez', 23), new Persona(4, 'maricela', 25)];
  }
  cambioselect(e) {
    console.log("cambio select ->");
    console.log(this.item);
    // console.log(e);
  }
  insertar() {
    console.log('insertar->');
    console.log(this.item);
  }
  test(data: any) {
    console.log(data);
    this.lst=this.lst.filter(item => String(item.nombre).toLowerCase().indexOf(data) > -1);
    //this.lst=this.lst.filter(x=>x.id==1);
    //console.log(this.lst);
  }
}
