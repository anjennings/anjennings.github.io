import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-frame',
  templateUrl: './body-frame.component.html',
  styleUrls: ['./body-frame.component.css']
})
export class BodyFrameComponent implements OnInit {

  constructor() { }
  
  @Input()
  active_tab = 'about'

  ngOnInit(): void {
	  this.active_tab = 'about'
  }

}
