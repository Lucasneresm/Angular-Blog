import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {

  photoCover:string = "https://cultura.uol.com.br/upload/tvcultura/esporte/20211104143637_93218785-596196910973712-1452765875970685902-n-1-1-.jpg"
  cardTitle:string ="Novo estadio quase pronto !!!"
  cardDescription:string ="Cofres cheios para usar em transferencia !!"

  constructor() { }

  ngOnInit(): void {
  }

}
