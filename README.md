### simple custom select based on ngx-mat-select-search
### How to use it?
### install angular material https://material.angular.io/guide/getting-started
```
npm install --save @angular/material @angular/cdk @angular/animations
```
### Install ngx-mat-select-search in your project:
```
npm install ngx-mat-select-search
```
### import modules:
```
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatIconModule,
    MatInputModule
  ],
})
export class AppModule {}
```
#### copy or create component select-search of this proyect
### Use the app-select-search
```
<app-select-search [required]="true" [(item)]="item" [lst]="lst" [label]="['nombre','edad']" [filterName]="'nombre'"
    [placeHolder]="'Persona'" [placeholderLabelSearch]="'Nombres'" [noEntriesFoundSearch]="'No existen mas resultados'"
    (itemChange)="cambioselect($event)">
  </app-select-search>
```