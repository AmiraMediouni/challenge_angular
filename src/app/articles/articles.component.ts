import { Component } from '@angular/core';
import { article } from './article';

@Component({
  selector: 'app-articles',
  template: `
  <h1 [style.text-align]="'center'"> EXERCICE N° 3</h1>
  {{titre}}
    <fieldset class="class1" *ngFor="let article of listeArticles , index as i">
      
      <legend >{{article.titre}} </legend>
      <p>Auteur : {{article.auteur}} </p>
      <p>Date : {{article.date}} </p>
      <p>Contenu : {{article.contenu}} </p>
     
    </fieldset>
    
  `,
  styles:[ `
  .class1{
    text-align:left;
    border: solid 1px black;
    margin: 0 auto;
    width:500px
  }
  
  `
  ]
})
export class ArticlesComponent {
  public titre="Les articles du jour "
  listeArticles:article[]=[
    new article('Le championnat du monde','Le champion du monde de cette année est....','Med Taher','12/12/2005'),

    new article('Les nouveaux parents','Les nouveaux parents....','Ahmed Said','11/11/2018'),

    new article('Comment écrire votre CV','Pour réussir à décraucher un emploi ...','Marie Elsa','02/04/2017'),
  ]
  /*listeArticles=[
    {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est....',auteur:'Med Taher',date:'12/12/2005'},
    {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
  ]*/
  
  

}

