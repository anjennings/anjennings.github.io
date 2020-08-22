import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  selected = 'about'

  ngOnInit(): void {
	  this.selected = 'about'
  }

  selectAbout(){
	  this.selected = 'about';
  }
  
  selectBlog(){
	  this.selected = 'blog';
  }
  
  selectProjects(){
	  this.selected = 'projects'
  }
}
