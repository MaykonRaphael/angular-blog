import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imageUrl:string = ''
  title:string = 'Minha Noticia'
  description:string = 'Descrição da noticia'

}
