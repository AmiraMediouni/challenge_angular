import { Component } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `<h1 [style.text-align]="'center'"> EXERCICE N° 1</h1>
  <input #myInput type="number">
  <button  (click)="calculCercle(myInput.value)" [style.background-color]="'orange'" [style.margin]="'10px'">Calculer cercle</button>
  <button (click)="calculCarre(myInput.value)" [style.background-color]="'green'" [style.margin]="'10px'" >Calculer carré</button>
  <br>{{resultat}}
<br> <br>
  
  `,

  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  public resultat=""
  calculCercle(value: any){
    var output=value*2*3.14
    this.resultat="Pour la valeur  "+value+" le résultat est : "+output
    
  }
  calculCarre(value: any){
    var output=value*4
    this.resultat="Pour la valeur  "+value+" le résultat est : "+output
    
  }

}
