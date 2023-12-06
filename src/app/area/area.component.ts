import { Component } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl:'./area.component.html',
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
