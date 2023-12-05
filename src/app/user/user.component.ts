import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <h1 [style.text-align]="'center'"> EXERCICE N° 2</h1>
  <h2>Les informations de l'utilisateur sont : </h2>
  <h3> Le nom est : {{name}}<br>
  L'adresse mail est : {{email}}<br>
  L'adresse est : {{address}}<br>
  </h3>
    <div *ngIf="displayHobbies; then thenBlock ;else elseBlock2">  </div>
    <ng-template #thenBlock>
    <button (click)="afficherHobbies()" [style.background-color]="'orange'" [style.margin]="'10px'">Afficher loisirs</button>

    </ng-template>
  
    <ng-template #elseBlock2>
    <button (click)="masquerHobbies()" [style.background-color]="'orange'" [style.margin]="'10px'">Masquer loisirs</button>
    <h3>Les loisirs sont : <br></h3>
    <h3 *ngFor="let hobby of hobbies , index as i">
        le loisir n° {{i+1}} est : {{hobby}}     <button (click)="deleteHobbies(i)" [style.background-color]="'red'" [style.margin]="'10px'">Supprimer</button>
        <br>
      </h3>
    </ng-template>
    <br>
    <button (click)="editData(inputName.value, inputEmail.value,inputAdresse.value)" [style.background-color]="'orange'" [style.margin]="'10px'">Modifier les informations</button>
      <form>
      <div>
      <label>Nom : </label>
      <input #inputName type="text">
   
      </div><br>
      <div>
      <label>Email : </label>
      <input #inputEmail  type="mail">
      </div><br>
      <div>
      <label>Adresse : </label>
      <input #inputAdresse type="text">
 
      </div>     

      </form>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public name2=""
  public email2=""
  public addresse2=""
  public name="toto"
  public email="toto@fivepoints.fr"
  public address="rue de la bourse lac2"
  public hobbies= ['Music','Movies','Sports']
  public displayHobbies=true
  afficherHobbies(){
    this.displayHobbies=false
  }
  masquerHobbies(){
    this.displayHobbies=true
  }
  deleteHobbies(i: number){
    this.hobbies.splice(i,1)
    console.log("la liste des loisirs est : " , this.hobbies)

  }
  editData(name2: string,email2: string,addresse2:string){
   if (name2!="") {this.name=name2}
   if (email2!="") {this.email=email2}
   if (addresse2!="") {this.address=addresse2}
  }
}
