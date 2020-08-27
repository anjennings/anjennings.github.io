import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  @Input()
  active_tab = 'about'
  
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
	  this.active_tab = 'about'
	  this.change.emit(this.active_tab);
  }

  selectAbout(){
	  this.active_tab = 'about';
	  this.change.emit(this.active_tab);
  }
  
  selectBlog(){
	  this.active_tab = 'blog';
	  this.change.emit(this.active_tab);
  }
  
  selectProjects(){
	  this.active_tab = 'projects'
	  this.change.emit(this.active_tab);
  }
}
