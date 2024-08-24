import { APIService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent , RouterLink , RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit 
{
  productData:Product[] = [] ; 
  title = 'API _Assignment' ; 
  constructor(private _APIService:APIService){

  }
  ngOnInit():void 
  {
    this._APIService.getData().subscribe({
      next:(res) => {
        this.productData = res ; 
        
      },
      error:(err)=> {
        console.log(err);
      }
    }
  )
  }
}
