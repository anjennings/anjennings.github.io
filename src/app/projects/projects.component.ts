import { Component, OnInit } from '@angular/core';
import { RepoDirectiveDirective } from './../git-project/repo-directive.directive';
import { GitProjectComponent } from './../git-project/git-project.component'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	
	gitRepos = null;

	constructor() { }
  
	async ngOnInit(): Promise<null> {
		
		this.gitRepos = await fetch('https://api.github.com/users/anjennings/repos')
		.then((data) => data.json())
		.then(function(data) {
			
			let repos = [];
			
			data.forEach(element => {
				console.log(element);
				let name = element.name;
				let url = element.html_url;
				let lang = element.language;
				let license = ((element.license === null) ? 'none' : element.license.name);
				
				repos.push({"name": name, "url": url, "mainLang": lang, "license": license});
			});
			return repos;
		});
		
		//tsLint can piss off
		return null;
	}
	
}
