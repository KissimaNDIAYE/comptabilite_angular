import { Routes } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { TypeImpotComponent } from './type-impot/type-impot.component';
import { AddTypeImpotComponent } from './add-type-impot/add-type-impot.component';
import { UpdateTypeImpotComponent } from './update-type-impot/update-type-impot.component';
import { UpdateTypeBudgetComponent } from './update-type-budget/update-type-budget.component';
import { AddTypeBudgetComponent } from './add-type-budget/add-type-budget.component';
import { TypeBudgetComponent } from './type-budget/type-budget.component';

export const routes: Routes = [
    {path: "categories", component : CategorieComponent},
    {path: "add-categorie", component : AddCategorieComponent},
    {path: "updateCategorie/:id", component: UpdateCategorieComponent},

    {path: "type_impots", component : TypeImpotComponent},
    {path: "add-type_impots", component : AddTypeImpotComponent},
    {path: "updateType_Impot/:id", component: UpdateTypeImpotComponent},

    {path: "type_budgets", component : TypeBudgetComponent},
    {path: "add-type-budget", component : AddTypeBudgetComponent},
    {path: "updateType_Budget/:id", component: UpdateTypeBudgetComponent},
    
    //{path: "", redirectTo: "produits", pathMatch: "full"}
];
