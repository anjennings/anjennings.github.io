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
				let name = element.name;
				let url = element.html_url;
				let lang = element.language;
				let license = ((element.license === null) ? 'none' : element.license.name);
				let updated = ((element.updated_at === null) ? 'N/A' : element.updated_at);
				updated = updated.toString().substring(0,10);
				repos.push({"name": name, "url": url, "mainLang": lang, "license": license, "updated":updated});
			});
			repos.sort(function(obj1, obj2){
				return obj1.updated < obj2.updated ? 1 : -1;
			});
			return repos;
		});
		
		//tsLint can piss off
		return null;
	}
	
}
