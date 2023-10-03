import { Component,Input } from '@angular/core';

@Component({
  selector: 'normal-card',
  templateUrl: './normal-card.component.html',
  styleUrls: ['./normal-card.component.css']
})
export class NormalCardComponent  {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""

  cardDescription:string ="Veja mais..."

  
  

}
