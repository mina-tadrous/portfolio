import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  typescript: boolean = false;
  java: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Mina Tadrous - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }


  filter() {
    let filterTags: Tag[] = [];
    
    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }

    if(this.typescript || this.java) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  resetFilters() {
    this.typescript = false;
    this.java = false;
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }
}
