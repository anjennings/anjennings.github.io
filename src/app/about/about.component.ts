import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	greetings = [
		'Hello!',
		'Welcome!',
		'Hi There!',
		'Greetings!'
	];
	
	greeting = this.greetings[Math.floor(Math.random() * 10) % (this.greetings.length)];
	
	showKnowMore = false;
	constructor() { }

	ngOnInit(): void {
	}
  
	knowMore(){
		console.log("I'm from Buenos Aires, and I say kill 'em all");
		this.showKnowMore = !this.showKnowMore;
	}

}
