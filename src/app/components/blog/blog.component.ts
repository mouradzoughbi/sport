import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  article:any=[];
  a:any={};

  constructor() { }

  ngOnInit(): void {
    this.article=
    [{id:"1",title:"article1",description:"description 1", date:"18-10-2023"},
    {id:"2",title:"article2",description:"description 2", date:"18-10-2023"}
   
  ];
  }

}
