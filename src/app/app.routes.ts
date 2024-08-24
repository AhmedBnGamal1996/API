import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JeweleryComponent } from './jewelery/jewelery.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenClothesComponent } from './men-clothes/men-clothes.component';
import { WomenClothesComponent } from './women-clothes/women-clothes.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" , pathMatch:'full'} , 
    {path:"home" , component:AppComponent} , 
    {path:"navbar" , component:NavbarComponent}, 
    {path:"jewelery" , component:JeweleryComponent}, 
    {path:"electronics" , component:ElectronicsComponent}, 
    {path:"men clothes" , component:MenClothesComponent}, 
    {path:"women clothes" , component:WomenClothesComponent}, 
    {path:"**" ,  component:NotFoundComponent} ,
];
