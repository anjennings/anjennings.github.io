import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-git-project',
  templateUrl: './git-project.component.html',
  styleUrls: ['./git-project.component.css']
})
export class GitProjectComponent implements OnInit {

  @Input() type: string = "success";

  constructor() { }

  ngOnInit(): void {
  }

}
