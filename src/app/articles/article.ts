export class article{
    titre:string="";
    contenu:string="";
    auteur:string="";
    date:string="";
    constructor(titre:string,contenu:string,auteur:string,date:string){
        this.titre=titre;
        this.contenu=contenu;
        this.auteur=auteur;
        this.date=date
    }
}