import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';
import { FilterOption } from '../_model/FilterOption';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;
  filtering: boolean = false;

  // Define arrays for filter options
  languages: FilterOption[] = [
    { key: 'Java', tag: Tag.JAVA, checked: false },
    { key: 'TypeScript', tag: Tag.TYPESCRIPT, checked: false },
    { key: 'Shell Scripting', tag: Tag.SHELL_SCRIPTING, checked: false },
    { key: 'Python', tag: Tag.PYTHON, checked: false },
    { key: 'C#', tag: Tag.C_SHARP, checked: false },
    { key: 'JavaScript', tag: Tag.JAVASCRIPT, checked: false }
  ];

  databases: FilterOption[] = [
    { key: 'Oracle', tag: Tag.ORACLE, checked: false },
    { key: 'PostgreSQL', tag: Tag.POSTGRES, checked: false },
    { key: 'MongoDB', tag: Tag.MONGODB, checked: false },
    { key: 'SQL Server (Express)', tag: Tag.SQL_SERVER, checked: false }
  ];

  frameworks: FilterOption[] = [
    { key: 'Angular', tag: Tag.ANGULAR, checked: false },
    { key: 'ASP', tag: Tag.ASP, checked: false },
    { key: 'JSP', tag: Tag.JSP, checked: false },
    { key: 'Django', tag: Tag.DJANGO, checked: false },
    { key: 'Spring', tag: Tag.SPRING, checked: false },
    { key: 'Soap Web Service', tag: Tag.WEB_SERVICES, checked: false }
  ];

  testingTools: FilterOption[] = [
    { key: 'SoapUI', tag: Tag.SOAPUI, checked: false },
    { key: 'Postman', tag: Tag.POSTMAN, checked: false },
    { key: 'Cypress', tag: Tag.CYPRESS, checked: false },
    { key: 'Selenium', tag: Tag.SELENIUM, checked: false },
    { key: 'JMeter', tag: Tag.JMETER, checked: false },
    { key: 'Gatling', tag: Tag.GATLING, checked: false }
  ];

  deployments: FilterOption[] = [
    { key: 'Docker', tag: Tag.DOCKER, checked: false },
    { key: 'Kubernetes', tag: Tag.KUBERNETES, checked: false },
    { key: 'Maven', tag: Tag.MAVEN, checked: false },
    { key: 'Jenkins', tag: Tag.JENKINS, checked: false },
    { key: 'AWS', tag: Tag.AWS, checked: false }
  ];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Mina Tadrous - Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    this.languages.forEach(language => {
      // Check if the language is checked
      if (language.checked) {
        filterTags.push(language.tag);
      }
    });
    this.databases.forEach(database => {
      // Check if the databases is checked
      if (database.checked) {
        filterTags.push(database.tag);
      }
    });
    this.frameworks.forEach(framework => {
      // Check if the frameworks is checked
      if (framework.checked) {
        filterTags.push(framework.tag);
      }
    });
    this.testingTools.forEach(testingTool => {
      // Check if the testingTools is checked
      if (testingTool.checked) {
        filterTags.push(testingTool.tag);
      }
    });
    this.deployments.forEach(deployment => {
      // Check if the deployment is checked
      if (deployment.checked) {
        filterTags.push(deployment.tag);
      }
    });

    let anyArrayChecked = this.hasChecked(this.languages) ||
      this.hasChecked(this.databases) ||
      this.hasChecked(this.frameworks) ||
      this.hasChecked(this.testingTools) ||
      this.hasChecked(this.deployments);

    if (anyArrayChecked) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }
    this.projects = this.projectService.getProjectByFilter(filterTags);
  }

  hasChecked(filterOptions: FilterOption[]) {
    return filterOptions.some(option => option.checked);
  }

  resetFilters() {
    // Reset all filter options
    this.languages.forEach(language => language.checked = false);
    this.databases.forEach(database => database.checked = false);
    this.frameworks.forEach(framework => framework.checked = false);
    this.testingTools.forEach(tool => tool.checked = false);
    this.deployments.forEach(option => option.checked = false);
    this.filtering = false;
    this.projects = this.projectService.getProjects();
  }


  toggleCheckbox(index: number, options: FilterOption[]) {

    options[index].checked = !options[index].checked;
    this.filter(); 
  }
}
