import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/mookData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  imageUrl:string = ''
  title:string = ''
  description:string = ''
  private id:string | null = '0'

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = data.filter(article => article.id == id)[0]

    this.title = result.title
    this.imageUrl = result.imageUrl
    this.description = result.description
  }
}
