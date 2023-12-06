import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 // public prename=""
  /*public name2=""
  public email2=""
  public addresse2=""
  public prename="tototo"*/
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
  
}
