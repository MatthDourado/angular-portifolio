import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent {

  @Input()
  photo:string =""
  @Input()
  Title:string =""
  @Input()
  resume:string =""
  @Input()
  link:string=""
  @Input()
  linkL:string=""



  

}
