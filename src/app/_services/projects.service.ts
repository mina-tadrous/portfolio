import { Injectable, Type } from '@angular/core';
import { projects } from "../_model/projects";
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects() {
    return projects
  }

  getProjectById(id: number) : Project {
    let project = projects.find(project => project.id === id);
    if (project === undefined){
      throw new TypeError('There is no project that matches the id: '+ id);
    }
    return project;
  }

  getProjectByFilter(filterTags: Tag[]) {
    let filterProjects: Project[] = []

    this.getProjects().forEach(project => {
      let foundAny = true;

      if(filterTags.length > 0) {
        foundAny = false;
      }

      

      filterTags.forEach(filterTag => {
        if(project.tags.includes(filterTag)) {
          foundAny = true; 
        }
      })

      if(foundAny) {
        filterProjects.push(project);
      }
      
      return filterProjects;
    });
    
    return filterProjects;
  }
}
