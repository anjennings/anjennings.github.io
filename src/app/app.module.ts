import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { RepoShowcaseComponent } from './repo-showcase/repo-showcase.component';
import { AboutComponent } from './about/about.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { RepoDirectiveDirective } from './git-project/repo-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    LinksComponent,
    RepoShowcaseComponent,
    AboutComponent,
    KnowMoreComponent,
    BlogComponent,
    ProjectsComponent,
    RepoDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
