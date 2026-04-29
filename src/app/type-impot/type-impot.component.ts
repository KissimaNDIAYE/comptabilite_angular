import { Component } from '@angular/core';
import { Type_Impot } from '../model/type_impot.model';
import { TypeImpotService } from '../service/type-impot.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-type-impot',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './type-impot.component.html',
  styleUrls: ['./type-impot.component.css']
})
export class TypeImpotComponent {

  type_impots! : Type_Impot[] ;
  
    constructor(private type_impotService: TypeImpotService) {
    }
  
    chargerType_Impot(){
      this.type_impotService.listeType_Impot().subscribe(type_impots => {
        console.log(type_impots);
        this.type_impots = type_impots;
      }); 
    }

    ngOnInit() {
    this.chargerType_Impot();
     }

    
  

    supprimerType_Impot(p: Type_Impot)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.type_impotService.supprimerType_Impot(p.idType_Impot!).subscribe(() => {
        console.log("type d'impôt supprimé");
        this.chargerType_Impot();
           });
    }

}
